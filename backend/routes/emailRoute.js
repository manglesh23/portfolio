const { sendEmailNotification } = require('../controller/sendEmail');

const router= require('express').Router();

router.post("/sendEmail",sendEmailNotification);

module.exports=router;