const sql = require('../dbConnect')


const getUser = async () => {
    try {        
        const userCheckQuery = `SELECT * FROM tbl_User`
        console.log(userCheckQuery);
        const userCheck = await sql.query(userCheckQuery)        
        if(userCheck[0].length > 0){           
            console.log(userCheck[0]);
            //if(rows[0].affectedRows){
                var status ={
                    "code":200,
                    "message":"user listed from records",
                    "data":userCheck[0]
                }
                return status
            //}
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
            "message":"user getting failed",
            "data":false
        }
        return status
    }
}


        

module.exports = {
    getUser
}

