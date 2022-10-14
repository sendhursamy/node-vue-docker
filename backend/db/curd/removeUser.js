const sql = require('../dbConnect')
var md5 = require('md5');

const removeUser = async (userDetails) => {   
    try {        
        const userCheckQuery = `SELECT * FROM tbl_User WHERE tb_UserID = '${userDetails.tb_UserID}'`        
        console.log(userCheckQuery);
        const userCheck = await sql.query(userCheckQuery)        
        if(userCheck[0].length > 0){
            const query = `DELETE FROM tbl_User WHERE tb_UserID="${userDetails.tb_UserID}"`;
            const rows = await sql.query(query);
            console.log(rows);
            if(rows[0].affectedRows){
                var status ={
                    "code":0,
                    "message":"user sucussely removed from records",
                    "data":true                
                }
                return status
            }
        }
        else{
            
                var status ={
                    "code":0,
                    "message":"no user found",
                    "data":false
                }
                    return status
            
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
    removeUser
}

