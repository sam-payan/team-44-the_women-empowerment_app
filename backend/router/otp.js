const express = require("express");
const router = express.Router();
const { sendMail } = require("../mailer");
const app = express();

const otpStore = {};

const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

// API to send OTP
app.post("/send-otp", async (req, res) => {
  const { email } = req.body;
  const otp = generateOtp();
  otpStore[email] = otp;

  const emailSent = await sendMail(email, "Your OTP Code", `Your OTP is ${otp}. It expires in 5 minutes.`);

  if (emailSent) {
    res.json({ message: "OTP sent successfully!" });
  } else {
    res.status(500).json({ error: "Failed to send OTP" });
  }
});

module.exports = router;