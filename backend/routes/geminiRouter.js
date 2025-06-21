const express= require('express');
const { gemini } = require('../controller/gemini');
 const geminiRouter= express.Router();

 geminiRouter.post('/gemini',gemini);

 module.exports=geminiRouter;