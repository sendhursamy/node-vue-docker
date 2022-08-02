const express =require('express');
const router = express.Router();
const {thgAuth} = require('./../../../auth/auth')
const {getUser} = require('./../../../db/agentCare/getuserDetails')

router.get('/',thgAuth,async (req,res,next)=>{
    const agentCode = req.query.BPcode
    const userDetails = await getUser(agentCode)
    if(userDetails.code == 0){
        res.status(200).send(userDetails)
    }
    else{
        res.status(200).send(userDetails)
    }
    // res.send('Agent Portal API')
})
module.exports=router
