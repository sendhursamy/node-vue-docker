const express = require('express');
const router = express.Router();
const { thgAuth } = require('./../../../auth/auth')
const { getUser } = require('./../../../db/agentCare/getuserDetails')
var axios = require('axios');
var fs = require('fs');
const FormData = require('form-data');
const { request } = require('http');
const downloadFile = require('./../../../lib/downloadFile');
const { response } = require('express');
const { dmsConfig,downloadPaths } = require('./../../../config/config')
const getFilterData = require('./../../../lib/dms/getFilterData')
const getFilterConfig = require('./../../../lib/dms/getFilterConfig')
const getNodes = require('./../../../lib/dms/getBillNodes')

router.get('/', thgAuth,async (req, res, next) => {
    
    var d = new Date();
    dateArray = []
    dateArray.push(d.toISOString().split(':')[0].split('-')[0] + '' + d.toISOString().split(':')[0].split('-')[1])
    for (i = 0; i < 5; i++) {
        d.setMonth(d.getMonth() - 1);
        dateArray.push(d.toISOString().split(':')[0].split('-')[0] + '' + d.toISOString().split(':')[0].split('-')[1])
    }
    
    const config = await getFilterData('9600000015',dateArray)
    // console.log('config', config)
    const filter_config = await getFilterConfig(config)
    // console.log('filter_config', filter_config)
    const nodeDetails = await getNodes(filter_config)
    const nodes=[]
    nodeDetails.forEach(element => {
        // console.log('nodeDetails', element.list.pagination.count)
        if(element.list.pagination.count > 0){
            var t = element.list.entries[0].entry
            // console.log(t);
            nodes.push(t);
        }
        
    });
    // console.log(nodes);

    var arg = nodes.map(i => {
        var a={}
        a.url = dmsConfig.host+dmsConfig.searchPath+i.id+'/versions/'+dmsConfig.version+'/content?attachment=true'
        a.name = i.name
        a.path = downloadPaths.bills
        a.docPeriod = i.properties["sd:DocPeriod"]
        return a
    })

    const promise = arg.map(i=>  downloadFile(i.url,i.path,i.name,i.docPeriod,req.query.BPcode))
    console.log('promise', promise )
    Promise.all(promise).then(d=> {
        // console.log(d)
        res.send(d)
    }).catch(e=> {
        res.send('error downloading file: ' + e.message)
    })

    

})
module.exports = router
