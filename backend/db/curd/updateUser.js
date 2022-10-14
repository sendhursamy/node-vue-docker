const sql = require('../dbConnect')
var md5 = require('md5');

const updateUser = async (userDetails) => {    
    try {
        console.log(userDetails);
        const userCheckQuery = `SELECT * FROM tbl_User WHERE tb_UserID = '${userDetails.tb_UserID}'`
        console.log(userCheckQuery);
        console.log("***********");
        const userCheck = await sql.query(userCheckQuery)
        console.log(userCheck[0]);
        if(userCheck[0].length > 0){

            const query =  `UPDATE tbl_User SET 
            tb_name= "${userDetails.tb_name}",
            tb_mobile= "${userDetails.tb_mobile}",
            tb_emailid = "${userDetails.tb_emailid}",
            tb_userstatus = "${userDetails.tb_userstatus}",
            tb_password = "${userDetails.tb_password}" WHERE tb_UserID = "${userDetails.tb_UserID}" ` ;
            console.log(query)
            const rows = await sql.query(query);
            if(rows[0].affectedRows){
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
        else{
            var status ={
                "code":500,
                "message":"user not exists",
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
            "message":"user update failed",
            "data":false
        }
        return status
    }
}


        

module.exports = {
    updateUser
}

