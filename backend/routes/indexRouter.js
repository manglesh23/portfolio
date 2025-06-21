const router = require("express").Router();
// const path=require('path')
const emailRouter = require("./emailRoute");
const smsRouter = require("./smsRoute");
const uploadCvRouter = require("./uploadCVRoute");
const downloadCvRouter = require("./downloadCV");
const geminiRouter = require("./geminiRouter");
// console.log(path.join(__dirname,'../controller'))
router.use("/email", emailRouter);
router.use("/sms", smsRouter);
router.use("/cv", uploadCvRouter);
router.use("/download", downloadCvRouter);
router.use('/gemini',geminiRouter);
module.exports = router;
