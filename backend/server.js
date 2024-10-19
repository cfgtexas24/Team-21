import express from "express";
import nodemailer from "nodemailer";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { MongoClient, ServerApiVersion } from 'mongodb';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: '*'
    },
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

dotenv.config();

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  run();

  const database = client.db('CFG-Users');
  const usersCollection = database.collection('Users');

  try {
    const user = await usersCollection.findOne({ email: username });
    
    if (!user) {
      return res.status(401).json({ success: false, message: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(401).json({ success: false, message: 'Invalid password' });
    }
    res.json({ success: true, message: 'Login successful', des: user.designation, name: user.name });

  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.get('/api/users', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('CFG-Users');
    const usersCollection = database.collection('Users');

    // Fetch all users categorized by roles
    const mentees = await usersCollection.find({ designation: 'mentee' }).toArray();
    const mentors = await usersCollection.find({ designation: 'mentor' }).toArray();
    const admins = await usersCollection.find({ designation: 'admin' }).toArray();

    res.status(200).json({ mentees, mentors, admins });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users' });
  }
});


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post('/send-sms', async (req, res) => {
  try {
      const mailOptions = {
          from: process.env.EMAIL_USER,
          to: '9729922662@mms.cricketwireless.net',
          subject: '',
          text: req.body.msg,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent: ' + info.response);

  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ success: false, message: 'An error occurred' });
  }
});

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cfg-users.r8hu0.mongodb.net/?retryWrites=true&w=majority&appName=CFG-Users`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    await client.db("admin").command({ ping: 1 });

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {

    console.log("Mongo error: " + error);
  }
}

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('sendMessage', (message) => {
    io.emit('receiveMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = 5174;
server.listen(PORT, () => {
  console.log(`Server running on http://172.20.10.3:${PORT}`);
});