import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post('/send-sms', (req, res) => {

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: '9729922662@mms.cricketwireless.net',
        subject: '',
        text: req.body.msg,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log('Error occurred: ' + error.message);
        }
        console.log('Email sent: ' + info.response);
    });
})


app.listen(5174, () => {
    console.log(`Server running at http://localhost:5174`);
});