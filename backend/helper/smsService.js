const twilio = require("twilio");
require('dotenv').config();
/* -------------------------------------------------------------------------- */
/*           Send SMS Notification via tiwilio                                */
/* -------------------------------------------------------------------------- */ 
const sendsms = async (to, text) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_ACCOUNT_TOKEN;
  const twilioPhoneNumber = "+15802381099";
  const client = twilio(accountSid, authToken);

  try {
  let response=  await client.messages.create({
      to: "+918084377799",
      from: twilioPhoneNumber,
      body: text,
    });
    console.log("SMS SENT");
    return response;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { sendsms };
