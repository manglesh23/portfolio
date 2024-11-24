const { uploadCV } = require('../controller/uploadCV');
const { uploadDatafile } = require('../helper/multer');

const router= require('express').Router();

router.post("/uploadcv",uploadDatafile().single('file'),uploadCV);

module.exports=router;