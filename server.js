// server.js

// Import required modules
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Route to handle incoming messages from Discord
app.post('/discord-message', (req, res) => {
    const message = req.body.message;
    // Forward the message to your Roblox game (you'll need to implement this part)
    console.log("Message from Discord:", message);
    res.send("Message received successfully");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
