
const express = require('express');
const { thgAuth } = require('./../../../auth/auth')
const {downloadPaths} = require('./../../../config/config')
const router = express.Router();


router.get('/:filename',thgAuth, async (req, res, next) => {
    var filepath=downloadPaths.bills+req.query.BPcode+'/'+req.params.filename;
    res.download(filepath)
})
module.exports = router