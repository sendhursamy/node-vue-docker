const express = require('express')
const helmet = require("helmet");
const app = express()
require('dotenv').config()
// console.log(process.env)
const bodyParser = require('body-parser');

app.use(express.json());

Object.defineProperty(Date.prototype, 'YYYYMMDDHHMMSS', {
  value: function() {
      function pad2(n) {  // always returns a string
          return (n < 10 ? '0' : '') + n;
      }

      return this.getFullYear() +
             pad2(this.getMonth() + 1) + 
             pad2(this.getDate()) +
             pad2(this.getHours()) +
             pad2(this.getMinutes()) +
             pad2(this.getSeconds());
  }
});

// To be removed in production
function setupCORS(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-type,Accept,X-Access-Token,X-Key');
  res.header('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
      res.status(200).end();
  } else {
      next();
  }
}
app.all('/*', setupCORS);
// To be removed in production

const port = 3001
app.use(helmet())

app.listen(port, () => {
  console.log(`Agent care APP listening at http://localhost:${port}`)
})
app.get('/', async (req, res) => {
  res.send('Agent Care Api Up !!!')
})
 
app.use('/auth', require('./routes/agentportal/v1/auth'))
app.use('/createuser', require('./routes/agentportal/v1/createUser'))
app.use('/profile', require('./routes/agentportal/v1/profile'))
app.use('/getpaymentlink', require('./routes/payment/v1/getPaymentLink'))