const mongoose = require('mongoose');

// Connect to local MongoDB instance
mongoose.connect('mongodb://localhost:27017/userSignups', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

// Handle connection errors
db.on('error', console.error.bind(console, 'Connection error:'));

// Log successful connection
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define User schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

// Create User model from schema
const User = mongoose.model('User', userSchema);

// Function to save new user data from form submission
const saveUser = (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });

  // Save user to MongoDB
  newUser.save((err) => {
    if (err) return console.error(err);
    res.send('User saved successfully!');
  });
};

module.exports = { db, saveUser };


