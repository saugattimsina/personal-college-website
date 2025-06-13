const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// API route to receive data
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const entry = `Name: ${name}, Email: ${email}, Message: ${message}\n`;

  // Save to file
  fs.appendFile(path.join(__dirname, 'messages.txt'), entry, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return res.status(500).json({ error: 'Failed to save message.' });
    }

    res.status(200).json({ success: true, message: 'Message saved!' });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
