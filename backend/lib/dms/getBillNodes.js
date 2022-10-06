var axios = require('axios');
const { response } = require('express');

const getNodes = async (config) => {
    var nodeDetails = []
    const results = await Promise.all(config)
    console.log('results:', results.length)
    for (var i = 0; i < results.length; i++) {
        console.log('results[i].data',results[i].data.list.entries)
        
        nodeDetails.push(results[i].data);
    }
    return nodeDetails;
}

module.exports = getNodes