const sql = require('../dbConnect')
var md5 = require('md5');

const validateUser = async (userDetails) => {
    try {
        console.log(userDetails);
        const userCheckQuery = `SELECT * FROM tbl_UserProfile WHERE tb_UP_BPcode = '${userDetails.agentcode}' AND tb_UP_password = '${md5(userDetails.password)}'`
        console.log(userCheckQuery);
        const userCheck = await sql.query(userCheckQuery)
        console.log(userCheck[0]);
    // tb_UP_UserID,tb_UP_BPcode,tb_UP_BPDesc,tb_UP_title,tb_UP_name,tb_UP_houseno,tb_UP_street1,tb_UP_street2,tb_UP_street3,tb_UP_street4,tb_UP_city,tb_UP_district,tb_UP_postalcode,tb_UP_regionname,tb_UP_mobile,tb_UP_emailid,tb_UP_usergroup,tb_UP_userstatus,tb_UP_password,tb_UP_createddate,tb_UP_updateddate

        if(userCheck[0].length > 0){
            var status ={
                "code":0,
                "message":"user validated",
                "data":{
                      "BPcode":userCheck[0][0].tb_UP_BPcode,
                      "title":userCheck[0][0].tb_UP_title,
                      "name":userCheck[0][0].tb_UP_name,
                      "houseno":userCheck[0][0].tb_UP_houseno,
                      "street1":userCheck[0][0].tb_UP_street1,
                      "street2":userCheck[0][0].tb_UP_street2,
                      "street3":userCheck[0][0].tb_UP_street3,
                      "street4":userCheck[0][0].tb_UP_street4,
                      "city":userCheck[0][0].tb_UP_city,
                      "district":userCheck[0][0].tb_UP_district,
                      "postalcode":userCheck[0][0].tb_UP_postalcode,
                      "regionname":userCheck[0][0].tb_UP_regionname,
                      "mobile":userCheck[0][0].tb_UP_mobile,
                      "emailid":userCheck[0][0].tb_UP_emailid,
                      "usergroup":userCheck[0][0].tb_UP_usergroup,
                      "userstatus":userCheck[0][0].tb_UP_userstatus,
                      "createddate":userCheck[0][0].tb_UP_createddate,
                      "updateddate":userCheck[0][0].tb_UP_updateddate
                    
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

