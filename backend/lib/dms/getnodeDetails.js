var axios = require('axios');

const getnodeDetails = async () => {
    var data = JSON.stringify({
        "query": {
            "query": "TYPE:'sd:BusinessDocuments'  and =sd:BizDocType:'Bill'  and =sd:Code:'9600000015' and =sd:DocPeriod:'202208' or =sd:DocPeriod:'202207'or =sd:DocPeriod:'202206'or =sd:DocPeriod:'202205'or =sd:DocPeriod:'202204'  "
        },
        "fields": [
            "name",
            "id",
            "properties.sd:DocPeriod"
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
    });

    var config = {
        method: 'post',
        url: 'https://dms-test.thehindu.co.in/alfresco/api/-default-/public/search/versions/1/search',
        headers: {
            'accept': 'application/json',
            'authorization': 'Basic YWRtaW46YWRtaW4=',
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}
module.exports = getnodeDetails