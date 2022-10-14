const sql = require('../dbConnect')
var md5 = require('md5');

const insertUser = async (userDetails) => {
    // tb_UP_UserID,tb_UP_BPcode,tb_UP_BPDesc,tb_UP_title,tb_UP_name,tb_UP_houseno,tb_UP_street1,tb_UP_street2,tb_UP_street3,tb_UP_street4,tb_UP_city,tb_UP_district,tb_UP_postalcode,tb_UP_regionname,tb_UP_mobile,tb_UP_emailid,tb_UP_usergroup,tb_UP_userstatus,tb_UP_password,tb_UP_createddate,tb_UP_updateddate
    try {
        console.log(userDetails);
        const userCheckQuery = `SELECT * FROM tbl_User WHERE tb_UserID = '${userDetails.tb_UserID}'`
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
            // tb_UP_UserID,tb_UP_BPcode,tb_UP_BPDesc,tb_UP_title,tb_UP_name,tb_UP_houseno,tb_UP_street1,tb_UP_street2,tb_UP_street3,tb_UP_street4,tb_UP_city,tb_UP_district,tb_UP_postalcode,tb_UP_regionname,tb_UP_mobile,tb_UP_emailid,tb_UP_usergroup,tb_UP_userstatus,tb_UP_password,tb_UP_createddate,tb_UP_updateddate
           
            
            const query = `INSERT into tbl_User(tb_name,tb_mobile,tb_emailid,tb_userstatus,tb_password) VALUES (
                "${userDetails.tb_name}",
                "${userDetails.tb_mobile}",
                "${userDetails.tb_emailid}",
                "${userDetails.tb_userstatus}",
                "${md5(userDetails.tb_password)}"

                )`;
            console.log(query)
            const rows = await sql.query(query);
            console.log(rows)
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

