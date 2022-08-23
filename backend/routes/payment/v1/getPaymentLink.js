const axios = require('axios')
const express = require('express');
const router = express.Router();
const { thgAuth } = require('../../../auth/auth')
//const {getUser} = require('./../../../db/agentCare/getuserDetails')
//const {paymentConfig} = require('./../../../config/config')
const { getPaymentToken } = require('../../../lib/generatePaymentLinkToken')
const { getpaymentLink } = require('../../../lib/getPaymentLink')


router.post('/', thgAuth, async (req, res, next) => {
    const paymentTokenDetails = await getPaymentToken();
    const agentCode = req.query.BPcode
    const { api_user_id, api_ref_id, api_key, res_status, res_message } = paymentTokenDetails.data
    if(paymentTokenDetails.code = 200) {
        if (res_status == 'Y') {
            const paymentLink = await getpaymentLink(agentCode, api_ref_id, api_user_id, api_key)
            console.log('paymentLink', paymentLink);
            if(paymentLink.code == 200) {
                if (paymentLink.res_status == 'Y') {
                    res.status(paymentLink.code).send({
                        "code":200,
                        "paymentLink": paymentLink.data.payment_link,
                        "mesage":''
                    })
                }
                else {
                    res.status(paymentLink.code).send({
                        "code":0,
                        "paymentLink": '',
                        "mesage":'No payment link is available now'

                    })
                }
            }
            else{
                res.status(paymentLink.code).send({
                    "code":paymentLink.code,
                    "paymentLink": '',
                    "mesage":'No payment link is available now'

                })
            }
        }
        else {
            res.status(200).send({
                "code": 0,
                "paymentLink": '',
                "mesage": 'Token Not generated'
            })
        }
    }
    else {
        res.status(paymentTokenDetails.code).send({
            "code": paymentTokenDetails.code,
            "paymentLink": '',
            "mesage": 'Token Not generated'
        })
    }
    
})
module.exports = router