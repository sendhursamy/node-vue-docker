
const express = require('express');
const { thgAuth } = require('./../../../auth/auth')
const router = express.Router();


router.get('/:filename',thgAuth, async (req, res, next) => {
    var filepath='/usr/app/backend/files/bills/'+req.query.BPcode+'/'+req.params.filename;
    res.download(filepath)
})
module.exports = router