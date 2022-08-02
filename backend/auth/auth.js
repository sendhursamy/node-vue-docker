const jwt = require('jsonwebtoken')

const thgAuth = async (req,res,next) => {
   
    var date = new Date()
    console.log("db query start time  - "+date);
    try {
        
        res.setHeader('Access-Control-Allow-Origin', '*');
        const parameters = req.query
        const token = parameters.api_token
        var decoded = ''
        decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('--decoded--');
        console.log(decoded);
        console.log(decoded.exp);
        var d1 = new Date();
        var d2 = new Date(decoded.exp * 1000);
        console.log();
        console.log(d1, d2)
            if (d2 >= d1 && decoded) {
                console.log('not expires')
                // console.log(decoded.data.agentcode);
                req.query.BPcode = decoded.data.BPcode
                console.log('req.agentCode',req.query);
                next()
            }
            else{
                res.status(401).json({ msg: "Api token expired" })
            }
    } catch (err) {
        console.log('ERROR => ' + err);
        res.status(400).send('ERROR => ' + err)
        return err;
    }
}


module.exports ={
    thgAuth
}

