const express =require('express');
const router = express.Router();
const {validateUser} = require('./../../../db/agentCare/userAuth')
const getToken  = require('./../../../lib/generateToken')
const logger = require('./../../../lib/logger')

router.post('/',async (req,res)=>{
    const body = req.body;
    const {agentcode,password} = body;
    logger.info('auth request received for ' + agentcode)
    const userDetails = {
        agentcode,
        password
    }
    const isUserValidated = await validateUser(userDetails)
    if(isUserValidated.code == 0){
        const token = await getToken(isUserValidated.data)
        logger.info(`user ${JSON.stringify(userDetails.agentcode)} is validated` )
        logger.info(`user details ${JSON.stringify(isUserValidated.data)} ` )
        res.send({
            "code":200,
            "message":"user validated",
            "data":{
                "token":token,
                "user":isUserValidated.data
            }
        })
    }
    else{
        // no user found
        logger.info('auth request received for ' + agentcode + password)
        var status ={
            "code":401,
            "message":"username or password incorrect",
            "data":false
        }
        logger.error(status)
        res.status(200).send(status)
    }
})
module.exports=router
