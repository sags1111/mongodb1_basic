const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 9999;

// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});



app.listen(port, () => {
    console.log(`${port} has been declare`);
});