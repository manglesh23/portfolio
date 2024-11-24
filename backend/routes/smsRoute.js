const { sendSMS } = require('../controller/sendSMS');
// const { sendsms } = require('../helper/smsService');

const router= require('express').Router();

router.post("/sendsms",sendSMS)

module.exports=router;