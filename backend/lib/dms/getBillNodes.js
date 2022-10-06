var axios = require('axios');
const { response } = require('express');
var nodeDetails = []
const getNodes = async (config) => {

    const results = await Promise.all(config)
    for (var i = 0; i < results.length; i++) {
        nodeDetails.push(results[i].data);
    }
    return nodeDetails
}

module.exports = getNodes