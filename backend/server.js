import express from "express";
import nodemailer from "nodemailer";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: '*'
    },
});

app.use(cors());
app.use(bodyParser.json());

dotenv.config();

// MongoDB connection
const MONGODB_URI = 'mongodb://localhost:27017/emergency_requests';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define a schema for the emergency request
const EmergencyRequestSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  additionalInfo: String,
  createdAt: { type: Date, default: Date.now }
});

const EmergencyRequest = mongoose.model('EmergencyRequest', EmergencyRequestSchema);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post('/send-sms', async (req, res) => {
    try {
        // Save to MongoDB
        const newRequest = new EmergencyRequest(req.body);
        await newRequest.save();

        // Prepare email/SMS message
        const message = `
            New Emergency Request:
            Name: ${req.body.firstName} ${req.body.lastName}
            Contact: ${req.body.phone}, ${req.body.email}
            Location: ${req.body.address}, ${req.body.city}, ${req.body.state} ${req.body.zip}
            Additional Info: ${req.body.additionalInfo}
        `;

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: '9729922662@mms.cricketwireless.net',
            subject: 'New Emergency Request',
            text: message,
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);

        res.status(200).json({ success: true, message: 'Request saved and notification sent' });

        // Emit a socket event for real-time updates
        io.emit('newEmergencyRequest', newRequest);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'An error occurred' });
    }
});

io.on('connection', (socket) => {
    console.log('New user connected');
  
    socket.on('sendMessage', (message) => {
      io.emit('receiveMessage', message);
    });
  
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
});

server.listen(5174, () => {
    console.log(`Server running at http://172.20.10.3:5174`);
});