
// const paymentConfig = {
//     "api_user_id":"agntapp",
//     "api_user_pwd":"ew7utif4kgwateagjm",
//     "tokenUrl":"https://pay.hindu.com/tsubspay/THGAPIKeyToken",
//     "paymentLinkUrl":"https://pay.hindu.com/tsubspay/agentCareAppPaymentLinkGetAPI"
// }

const paymentConfig = {
    "api_user_id": "agntapp",
    "api_user_pwd": "ew7utif4kgwateagjm",
    "tokenUrl": "https://pgtest.thehindu.co.in/tsubspay/THGAPIKeyToken",
    "paymentLinkUrl": "https://pgtest.thehindu.co.in/tsubspay/agentCareAppPaymentLinkGetAPI"
}

const dmsConfig = {
    "host": "https://dms-test.thehindu.co.in",
    "searchPath": "/alfresco/api/-default-/public/alfresco/versions/1/nodes/",
    "version": "1.0",
    "username": "admin",
    "password": "admin",

}

const downloadPaths = {
    "bills": "/usr/app/backend/files/bills/"
}
const basicAuth = 'YWRtaW46YWRtaW4='

module.exports = {
    paymentConfig,
    downloadPaths,
    dmsConfig,
    basicAuth
}

