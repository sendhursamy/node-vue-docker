const sql = require('../dbConnect')
var md5 = require('md5');
const logger =require('./../../lib/logger')

const validateUser = async (userDetails) => {
    try {
        const userCheckQuery = `SELECT * FROM tbl_UserProfile WHERE tb_UP_BPcode = '${userDetails.agentcode}' AND tb_UP_password = '${md5(userDetails.password)}'`
        const userCheck = await sql.query(userCheckQuery)
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
        logger.error(JSON.stringify(status));
        return status
    }
}

module.exports = {
    validateUser
}

