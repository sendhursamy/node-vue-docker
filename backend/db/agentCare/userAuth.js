const sql = require('../dbConnect')
var md5 = require('md5');

const validateUser = async (userDetails) => {
    try {
        console.log(userDetails);
        const userCheckQuery = `SELECT * FROM profile WHERE agentcode = '${userDetails.agentcode}' AND password = '${md5(userDetails.password)}'`
        console.log(userCheckQuery);
        const userCheck = await sql.query(userCheckQuery)
        console.log(userCheck[0]);
        if(userCheck[0].length > 0){
            var status ={
                "code":0,
                "message":"user validated",
                "data":{
                    "agentcode":userCheck[0][0].agentcode,
                    "name":userCheck[0][0].name,
                    "email":userCheck[0][0].email,
                    "mobile":userCheck[0][0].mobile,
                    "role":userCheck[0][0].role,
                    "status":userCheck[0][0].status
                }
            }
            return status
        }
        else{
            
            var status ={
                "code":401,
                "message":"username or password incorrect",
                "data":false
            }
            return status
        }
            
    }
    catch (err) {
        console.log('ERROR => ' + err);
        var status ={
            "code":500,
            "message":"Server error",
            "data":false
        }
        return status
    }
}

module.exports = {
    validateUser
}

