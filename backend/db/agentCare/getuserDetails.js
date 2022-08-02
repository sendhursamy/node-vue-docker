const sql = require('../dbConnect')

const getUser = async (agentCode) => {
    try {
        console.log('code from sql',agentCode);
        const userCheckQuery = `SELECT * FROM tbl_UserProfile WHERE tb_UP_BPcode = '${agentCode}'`
        console.log(userCheckQuery);
        const userCheck = await sql.query(userCheckQuery)
        console.log(userCheck[0][0]);
        var userData = userCheck[0][0];
        if(userCheck[0].length > 0){
            var status ={
                "code":0,
                "message":"user validated",
                "data":{
                    "UserID":userData.tb_UP_UserID,
                    "BPcode":userData.tb_UP_BPcode,
                    "BPDesc":userData.tb_UP_BPDesc,
                    "title":userData.tb_UP_title,
                    "name":userData.tb_UP_name,
                    "houseno":userData.tb_UP_houseno,
                    "street1":userData.tb_UP_street1,
                    "street2":userData.tb_UP_street2,
                    "street3":userData.tb_UP_street3,
                    "Street4":userData.tb_UP_street4,
                    "city":userData.tb_UP_city,
                    "district":userData.tb_UP_district,
                    "postalcode":userData.tb_UP_postalcode,
                    "regionname":userData.tb_UP_regionname,
                    "mobile":userData.tb_UP_mobile,
                    "emailid":userData.tb_UP_emailid,
                    "usergroup":userData.tb_UP_usergroup,
                    "userstatus":userData.tb_UP_userstatus,
                    "createddate":userData.tb_UP_createddate,
                    "updateddate":userData.tb_UP_updateddate
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


