var axios = require('axios');

const getFilterData = async (BPcode, dates) => {
    

    dataArray = []
    var getFilter = new Promise((resolve, reject) => {
        if (dates.length > 0) {
            dates.forEach(async (date,index) => {
                dataArray.push(JSON.stringify({
                    "query": {
                        "query": "TYPE:'sd:BusinessDocuments'  and =sd:BizDocType:'Bill'  and =sd:Code:" + BPcode + " and =sd:DocPeriod:" + date
                    },
                    "fields": [
                        "name",
                        "id"
                    ],
                    "include": [
                        "properties"
                      ],
                      "sort": [
                        {
                          "type": "FIELD",
                          "field": "sd:DocPeriod",
                          "ascending": "true"
                        }
                      ]
                })
                )
                if (index === dates.length -1){
                    resolve();
                }
            });
        }
        else {
            resolve(false)
        }
    })

    await getFilter
    return dataArray

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

module.exports = getFilterData