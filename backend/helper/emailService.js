const nodemailer = require("nodemailer");

/* -------------------------------------------------------------------------- */
/*                        Email trigger Helper                                */
/* -------------------------------------------------------------------------- */
const sendEmail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.qlc.co.in",
      port: 587,
      secure: false,
      auth: {
        user: "no-reply@meraqui.com",
        pass: "Meraqui@1234",
      },
    });
   
    const mainOptions = {
      from: "mangleshyadav2@gmail.com",
      to,
      subject,
      text,
    };
    const response = await transporter.sendMail(mainOptions);
    return response;
  } catch (e) {
    return {
      error: true,
      details: e,
    };
  }
};

module.exports = { sendEmail };
