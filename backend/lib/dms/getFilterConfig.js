var axios = require('axios');
const { dmsConfig } = require('./../../config/config');

const getFilterConfig = async (config) => {
    configArray = []
    var getConfig = new Promise((resolve, reject) => {
        if (config.length > 0) {
            config.forEach(async (i, index) => {
                console.log('configqqqqq', i)
                var c = {
                    method: 'post',
                    url: dmsConfig.host + dmsConfig.searchPath,
                    headers: {
                        'accept': 'application/json',
                        'authorization': 'Basic YWRtaW46YWRtaW4=',
                        'Content-Type': 'application/json'
                    },
                    data: i
                };
                var p = axios(c)
                configArray.push(p)
                if (index === config.length - 1) {

                    resolve();
                }
            });
        }
        else {
            resolve(false)
        }
    })

    await getConfig
    return configArray
}

module.exports = getFilterConfig