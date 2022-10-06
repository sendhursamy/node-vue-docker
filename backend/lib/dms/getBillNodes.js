var axios = require('axios');
const { response } = require('express');

const getNodes = async (config) => {
    var nodeDetails = []
    const results = await Promise.all(config)
    console.log('results:', results.length)
    for (var i = 0; i < results.length; i++) {
        nodeDetails.push(results[i].data);
    }
    return nodeDetails
}

module.exports = getNodes