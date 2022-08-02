const express =require('express');
const router = express.Router();
const {insertUser} = require('./../../../db/agentCare/insertUser')
const {thgAuth} = require('./../../../auth/auth')

router.post('/',async (req,res)=>{
    const body = req.body;
    console.log(body);
    // tb_UP_UserID
    // tb_UP_BPcode
    // tb_UP_BPDesc
    // tb_UP_title
    // tb_UP_name
    // tb_UP_houseno
    // tb_UP_street1
    // tb_UP_street2
    // tb_UP_street3
    // tb_UP_street4
    // tb_UP_city
    // tb_UP_district
    // tb_UP_postalcode
    // tb_UP_regionname
    // tb_UP_mobile
    // tb_UP_emailid
    // tb_UP_usergroup
    // tb_UP_userstatus
    // tb_UP_password
    // tb_UP_createddate
    // tb_UP_updateddate

    
    const {tb_UP_BPcode,tb_UP_BPDesc,tb_UP_title,tb_UP_name,tb_UP_houseno,tb_UP_street1,tb_UP_street2,tb_UP_street3,tb_UP_street4,tb_UP_city,tb_UP_district,tb_UP_postalcode,tb_UP_regionname,tb_UP_mobile,tb_UP_emailid,tb_UP_usergroup,tb_UP_userstatus,tb_UP_password} = body;
    // console.log(agentcode,name,email,mobile,password,role);
    // agentcode,name,email,mobile,password,role
    const userDetails = {
        tb_UP_BPcode,
        tb_UP_BPDesc,
        tb_UP_title,
        tb_UP_name,
        tb_UP_houseno,
        tb_UP_street1,
        tb_UP_street2,
        tb_UP_street3,
        tb_UP_street4,
        tb_UP_city,
        tb_UP_district,
        tb_UP_postalcode,
        tb_UP_regionname,
        tb_UP_mobile,
        tb_UP_emailid,
        tb_UP_usergroup,
        tb_UP_userstatus,
        tb_UP_password
        

    }
    const userCheck = await insertUser(userDetails)
    res.send(userCheck)
})
module.exports=router
