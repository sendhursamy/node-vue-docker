const express = require('express')
const helmet = require("helmet");
const app = express()
require('dotenv').config()
// console.log(process.env)
const bodyParser = require('body-parser');

app.use(express.json());

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