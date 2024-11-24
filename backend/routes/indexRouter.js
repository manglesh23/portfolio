const router = require("express").Router();
// const path=require('path')
const emailRouter = require("./emailRoute");
const smsRouter = require("./smsRoute");
const uploadCvRouter = require("./uploadCVRoute");
const downloadCvRouter = require("./downloadCV");
// console.log(path.join(__dirname,'../controller'))
router.use("/email", emailRouter);
router.use("/sms", smsRouter);
router.use("/cv", uploadCvRouter);
router.use("/download", downloadCvRouter);
module.exports = router;
