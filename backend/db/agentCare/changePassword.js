const sql = require('../dbConnect')
var md5 = require('md5');

const changePassword = require = async (agentCode,oldPassword,newPassword) => {
    try {
        console.log('code from sql',agentCode);
        const userCheckQuery = `SELECT * FROM tbl_UserProfile WHERE tb_UP_BPcode = '${agentCode}' and tb_UP_password = '${md5(oldPassword)}' `
        console.log(userCheckQuery);
        const userCheck = await sql.query(userCheckQuery)
        console.log(userCheck[0].length);
        if(userCheck[0].length > 0){
            const updatePasswordQuery = `UPDATE tbl_UserProfile SET tb_UP_password ='${md5(newPassword)}'  WHERE tb_UP_BPcode ='${agentCode}' and tb_UP_password = '${md5(oldPassword)}'`;
            console.log(updatePasswordQuery);
            const updatePassword = await sql.query(updatePasswordQuery)
            console.log(updatePassword.length);
            if(updatePassword.length > 0 ){
                var status =  {
                    "code":200,
                    "message":"Password changed",
                    "data":true
                }
                return status;
            }
            else {
                var status =  {
                    "code":500,
                    "message":"Password Not updated",
                    "data":false
                }
                return status;
            }
            
        }
        else{
            
            var status ={
                "code":403,
                "message":"Old Password not match",
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
    changePassword
}


