const express =require('express');
const router = express.Router();
const {validateUser} = require('./../../../db/agentCare/userAuth')
const getToken  = require('./../../../lib/generateToken')

router.post('/',async (req,res)=>{
    const body = req.body;
    console.log(body);
    const {agentcode,password} = body;
    const userDetails = {
        agentcode,
        password
    }
    console.log(agentcode,password);
    const isUserValidated = await validateUser(userDetails)
    if(isUserValidated.code == 0){
        const token = await getToken(isUserValidated.data)
        console.log('token',token);
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
        var status ={
            "code":401,
            "message":"username or password incorrect",
            "data":false
        }
        res.status(200).send(status)
    }
})
module.exports=router
