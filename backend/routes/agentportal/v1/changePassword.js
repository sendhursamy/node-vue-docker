const express =require('express');
const router = express.Router();
const {thgAuth} = require('./../../../auth/auth')
const {changePassword} = require('./../../../db/agentCare/changePassword')

router.post('/',thgAuth,async (req,res,next)=>{
    const credentials = req.body
    console.log('credentials', credentials);
    if(credentials.oldPassword !== undefined && credentials.newPassword !== 'undefined'){
        if(credentials.newPassword === credentials.confirmPassword) {
            const updatePassword = await changePassword(req.query.BPcode, credentials.oldPassword, credentials.newPassword);
            res.send(updatePassword)
        }
        else{
            res.send('new and confirm password not mached')
        }
    }
    else{
        res.send('changepassword  -- 1')
    }
})
module.exports=router
