var axios = require('axios');

const getFilterConfig = async (config) => {


    configArray = []
    var getConfig = new Promise((resolve, reject) => {
        if (config.length > 0) {
            config.forEach(async (i, index) => {
                var c = {
                    method: 'post',
                    url: 'https://dms-test.thehindu.co.in/alfresco/api/-default-/public/search/versions/1/search',
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

    // var config = {
    //     method: 'post',
    //     url: 'https://dms-test.thehindu.co.in/alfresco/api/-default-/public/search/versions/1/search',
    //     headers: {
    //         'accept': 'application/json',
    //         'authorization': 'Basic YWRtaW46YWRtaW4=',
    //         'Content-Type': 'application/json'
    //     },
    //     data: data
    // };

    // axios(config)
    //     .then(function (response) {
    //         console.log(JSON.stringify(response.code));

    //         return response.data;
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
}

module.exports = getFilterConfig