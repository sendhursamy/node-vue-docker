const express =require('express');
const router = express.Router();
const {removeUser} = require('../../../db/curd/removeUser')

router.post('/',async (req,res)=>{
    const body = req.body;
    console.log(body);

    
    const {tb_UserID} = body;
    // console.log(agentcode,name,email,mobile,password,role);
    // agentcode,name,email,mobile,password,role
    const userDetails = {
        tb_UserID
    }
    const userCheck = await removeUser(userDetails)
    res.send(userCheck)
})
module.exports=router
