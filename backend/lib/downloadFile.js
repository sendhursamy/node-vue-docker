'use strict'

const Fs = require('fs')  
const Path = require('path')  
const Axios = require('axios')

async function downloadFile (fileUrl,filePath,filename = 'temp.docx',date) {  
  const url = fileUrl
  const path = Path.resolve(filePath, filename)
  console.log('path', path)
  const writer = Fs.createWriteStream(path)

  const response = await Axios({
    url,
    headers: { 
      'Authorization': 'Basic YWRtaW46YWRtaW4='
    },
    method: 'GET',
    responseType: 'stream'
  })

  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    var r_obj = {}
    r_obj.filename = filename
    r_obj.date = date
    writer.on('finish', resolve(r_obj))
    writer.on('error', reject)
  })
}

module.exports = downloadFile