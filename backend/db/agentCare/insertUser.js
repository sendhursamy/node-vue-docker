const sql = require('../dbConnect')
var md5 = require('md5');

const insertUser = async (userDetails) => {
    try {
        console.log(userDetails);
        const userCheckQuery = `SELECT * FROM profile WHERE agentcode = '${userDetails.agentcode}'`
        console.log(userCheckQuery);
        const userCheck = await sql.query(userCheckQuery)
        console.log(userCheck[0]);
        if(userCheck[0].length > 0){
            var status ={
                "code":500,
                "message":"user already exists",
                "data":false
            }
            return status
        }
        else{
            const query = `INSERT into profile(agentcode,name,email,mobile,password,role,status) VALUES ("${userDetails.agentcode}","${userDetails.name}","${userDetails.email}","${userDetails.mobile}","${md5(userDetails.password)}","${userDetails.role}","${userDetails.status}")`;
            const rows = await sql.query(query);
            if(rows[0].insertId){
                // paytmEventLog('info',`Db - ${userDetails.agentcode} -user insert success`)
                var status ={
                    "code":0,
                    "message":"success",
                    "data":true
                }
                    return status
            }
            else{
                // paytmDbErrorlog(`Db - ${userDetails.agentcode} -user insertfailed`)
                var status ={
                    "code":500,
                    "message":"user insert failed",
                    "data":false
                }
                return status
            }
        }
    } catch (err) {
        console.log('ERROR => ' + err);
        // paytmEventLog('error',`DB - ${err}`)
        // paytmEventLog('error',`DB - ${userDetails.agentcode} -user insert failed`)
        var status ={
            "code":500,
            "message":"user insert failed",
            "data":false
        }
        return status
    }
}


        

module.exports = {
    insertUser
}

