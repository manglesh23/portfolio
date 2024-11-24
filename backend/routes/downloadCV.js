const { download } = require('../controller/downloadCV');

const router= require('express').Router();

router.post("/downloadcv/:filename",download);

module.exports=router;