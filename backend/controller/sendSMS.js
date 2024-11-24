const { sendsms } = require("../helper/smsService");

const sendSMS = async (req, res) => {
  try {
    const { to, text } = req.body;
    let response = await sendsms(to, text);
    res.status(200).json({ success: true, msg: response });
  } catch (error) {
    res.status(404).json({ msg: "failed" });
  }
};

module.exports = { sendSMS };
