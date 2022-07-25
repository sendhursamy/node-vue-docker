const sql = require('../dbConnect')

const getUser = async (agentCode) => {
    try {
        console.log('code from sql',agentCode);
        const userCheckQuery = `SELECT * FROM profile WHERE agentcode = '${agentCode}'`
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
                "code":404,
                "message":"user not found",
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
    getUser
}


