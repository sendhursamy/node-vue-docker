const express =require('express');
const router = express.Router();
const {updateUser} = require('../../../db/curd/updateUser')

router.put('/',async (req,res)=>{
    const body = req.body;
    console.log(body);

    
    const {tb_UserID,tb_name,tb_mobile,tb_emailid,tb_userstatus,tb_password} = body;
    // console.log(agentcode,name,email,mobile,password,role);
    // agentcode,name,email,mobile,password,role
    const userDetails = {
        tb_UserID,
        tb_name,
        tb_mobile,
        tb_emailid,
        tb_userstatus,
        tb_password
    }
    const userCheck = await updateUser(userDetails)
    res.send(userCheck)
})
module.exports=router
