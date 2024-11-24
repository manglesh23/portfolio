const { sendEmail } = require("../helper/emailService");

// const path=require('path')
// console.log(path.join(__dirname,'../helper/emailService'))

const sendEmailNotification = async (req, res) => {
  try{  
    console.log("Request:-",req.body);
  const { to, subject, text } = req.body;

  let sendnotification = await sendEmail(to, subject, text);
  console.log(sendnotification);

  res.status(200).json({ msg: sendnotification });
  }catch(error){
    res.status(404).json({msg:error.message});
  }
};

module.exports = { sendEmailNotification };
