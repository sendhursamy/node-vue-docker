var axios = require('axios');

const getFilterData = async (BPcode, dates) => {


    dataArray = []
    var getFilter = new Promise((resolve, reject) => {
        if (dates.length > 0) {
            dates.forEach(async (date, index) => {
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
                if (index === dates.length - 1) {
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
}

module.exports = getFilterData