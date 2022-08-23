// import axios
const axios = require('axios');
const { paymentConfig } = require('./../config/config')

const getPaymentToken = async () => {
    var status;
    var date = new Date()
    var data = JSON.stringify({
        "api_user_id": paymentConfig.api_user_id,
        "api_user_pwd": paymentConfig.api_user_pwd,
        "api_ref_id": `AGNTAPP${date.YYYYMMDDHHMMSS()}`
    });

    var config = {
        method: 'post',
        url: paymentConfig.tokenUrl,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    try {
        var response = await axios(config);
        console.log(JSON.stringify(response.data));
        status = {
            "code": response.status,
            "data":response.data
        }
        return status 
    }
    catch(error){
        if (error.response) {
            console.log('Error response in getPaymentToken ');
            console.log(error.response.status);
            console.log(error.response.headers);
            status = {
                "code": error.response.status,
                "data": ""
            }
        } 
        else if (error.request) {
            status = {
                "code": 404,
                "data": ""
            }
        } 
        else {
          status = {
            "code": 500,
            "data": ""
        }
          console.log('Error', error.message);
        }
        console.log('status: ' + status);
        return status;
    }
}

module.exports = {
    getPaymentToken
}
