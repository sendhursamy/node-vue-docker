const jwt = require('jsonwebtoken')
const logger = require('./../lib/logger')

const thgAuth = async (req, res, next) => {

    var date = new Date()
    console.log("db query start time  - " + date);
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        const parameters = req.query
        const token = parameters.api_token
        var decoded = ''
        decoded = jwt.verify(token, process.env.JWT_SECRET);
        var d1 = new Date();
        var d2 = new Date(decoded.exp * 1000);
        if (d2 >= d1 && decoded) {
            console.log('not expires')
            // console.log(decoded.data.agentcode);
            req.query.BPcode = decoded.data.BPcode
            next()
        }
        else {
            logger.info(`user ${decoded.data.BPcode} is not authenticated- reason Api token expires -${token}`)
            res.status(401).json({ msg: "Api token expired" })
        }
    } catch (err) {
        logger.error(JSON.stringify(err))
        console.log('ERROR => ' + err);
        res.status(400).send('ERROR => ' + err)
        return err;
    }
}


module.exports = {
    thgAuth
}

