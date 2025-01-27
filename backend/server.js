// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// In-memory storage for users and leaderboard
let users = [];
let leaderboard = [];

// Middleware
app.use(bodyParser.json());

// Routes

// Signup route
app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ status: 'failure', message: 'All fields must be completed' });
  }

  users.push({ username, password });
  res.json({ status: 'success' });
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ status: 'failure', message: 'Username and password are required' });
  }

  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ status: 'failure', message: 'Username and/or password incorrect' });
  }

  res.json({ status: 'success' });
});

// Leaderboard update route
app.post('/update', (req, res) => {
  const { username, result } = req.body;

  if (result === 'correct') {
    leaderboard.push(username);
  }

  leaderboard = leaderboard.slice(-10); // Keep only the last 10 entries

  res.json({ leaders: leaderboard });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
