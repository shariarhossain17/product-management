const nodeMailer = require("nodemailer");
const { google } = require("googleapis");
require("dotenv").config();

const oAuth2Client = new google.auth.OAuth2(
  process.env.clientId,
  process.env.clietnSecret,
  "https://developers.google.com/oauthplayground"
);

oAuth2Client.setCredentials({ refresh_token: process.env.refreshToken });

module.exports.sendWithGmail = async (data) => {
  const accessToken = await oAuth2Client.getAccessToken();

  let transPorter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.
        senderMail,
        clientId: process.env.
        clientId,
        clientSecret: process.env.clietnSecret,
        refreshToken: process.env.
        refreshToken,
        accessToken: accessToken,
      },
  });
  
  const mailData = {
    from:process.env.senderMail,
    to:data.to,
    subject:data.subject,
    text:data.text
  }

  let info = await transPorter.sendMail(mailData)

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  return info.messageId
};
