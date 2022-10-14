const express =require('express');
const router = express.Router();
const {getUser} = require('../../../db/curd/getUser')

router.get('/',async (req,res)=>{
   
    
    console
    const userCheck = await getUser()
    res.send(userCheck)
})
module.exports=router
