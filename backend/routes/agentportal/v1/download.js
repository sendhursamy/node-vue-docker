
const express = require('express');
const router = express.Router();


router.get('/:filename', async (req, res, next) => {
    var filepath='/usr/app/backend/files/bills/'+req.params.filename;
    res.download(filepath)
})
module.exports = router