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
const { downloadPaths } = require('./../../../config/config')
const getFilterData = require('./../../../lib/dms/getFilterData')
const getFilterConfig = require('./../../../lib/dms/getFilterConfig')
const getNodes = require('./../../../lib/dms/getBillNodes')

router.get('/', async (req, res, next) => {
    
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
        a.url = 'https://dms-test.thehindu.co.in/alfresco/api/-default-/public/alfresco/versions/1/nodes/'+i.id+'/versions/1.0/content?attachment=true'
        a.name = i.name
        a.path = downloadPaths.bills
        a.docPeriod = i.properties["sd:DocPeriod"]
        return a
    })

    const promise = arg.map(i=>  downloadFile(i.url,i.path,i.name,i.docPeriod))
    console.log('promise', promise )
    Promise.all(promise).then(d=> {
        console.log(d)
        res.send('file downloaded')
    }).catch(e=> {
        res.send('error downloading file: ' + e.message)
    })

    console.log('aaa',arg);

    // const url = 'https://dms-test.thehindu.co.in/alfresco/api/-default-/public/alfresco/versions/1/nodes/da2a8a22-3281-4384-88b0-7fee7b551ef2/versions/1.0/content?attachment=true'
    // const path = downloadPaths.bills
    // console.log(path)
    // const down = await downloadFile(url, path, 'test1.docx');
    
   // res.send('ok')

})
module.exports = router
