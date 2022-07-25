const express =require('express');
const router = express.Router();
const {insertUser} = require('./../../../db/agentCare/insertUser')
const {thgAuth} = require('./../../../auth/auth')

router.post('/',async (req,res)=>{
    const body = req.body;
    console.log(body);
    const {name,email,mobile,password,agentcode,role,status} = body;
    console.log(agentcode,name,email,mobile,password,role);
    // agentcode,name,email,mobile,password,role
    const userDetails = {
        agentcode,
        name,
        email,
        mobile,
        password,
        role,
        status
    }
    const userCheck = await insertUser(userDetails)
    res.send(userCheck)
})
module.exports=router
