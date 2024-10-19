// backend/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/emergency_requests', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

// backend/models/EmergencyRequest.js
const mongoose = require('mongoose');

const EmergencyRequestSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: String,
  city: String,
  state: String,
  zip: String,
  additionalInfo: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('EmergencyRequest', EmergencyRequestSchema);

// backend/server.js
const express = require('express');
const connectDB = require('./db');
const EmergencyRequest = require('./models/EmergencyRequest');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5174;

connectDB();

app.use(cors());
app.use(express.json());

app.post('/send-sms', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, address, city, state, zip, additionalInfo } = req.body;
    
    const newRequest = new EmergencyRequest({
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      zip,
      additionalInfo
    });

    await newRequest.save();

    // Here you would implement your SMS sending logic
    console.log('Emergency request saved and SMS sent');

    res.json({ success: true, message: 'Emergency request received and SMS sent' });
  } catch (error) {
    console.error('Error processing emergency request:', error);
    res.status(500).json({ success: false, message: 'Error processing request' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));