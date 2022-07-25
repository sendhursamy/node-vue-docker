const express =require('express');
const router = express.Router();
const {thgAuth} = require('./../../../auth/auth')




router.get('/',async (req,res,next)=>{
    res.send('Agent Portal API')
})
module.exports=router
