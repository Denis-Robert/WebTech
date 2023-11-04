const express = require('express');
const app = express();
// Define a route for the home page
app.get('/', (req, res) => {
    res.send('This is the home page');
});
// Define an additional route
app.get('/about', (req, res) => {
    res.send('This is a test page.');
});
// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
