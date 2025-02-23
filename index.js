const express = require('express');
const app = express();
const port = 4000;

// Basic Route
app.get('/', (req, res) => {
    res.send('This is Stanley in Hello, Node.js!');
});

// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
