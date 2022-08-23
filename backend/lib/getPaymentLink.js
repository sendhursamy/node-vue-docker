const axios = require('axios');
const  {paymentConfig} = require('./../config/config')

const getpaymentLink = async(agent_code,api_ref_id,api_user_id,api_key) => {
    let status;
    var data = JSON.stringify({
        "agent_code": agent_code,
        "api_ref_id": api_ref_id,
        "api_user_id": api_user_id,
        "api_key": api_key
      });
      
      var config = {
        method: 'post',
        url: paymentConfig.paymentLinkUrl,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      try{
        const response = await axios(config)
        status = {
            "code": response.status,
            "data": response.data
        }
      return  status;
    }
    catch(error) {
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
    getpaymentLink
}