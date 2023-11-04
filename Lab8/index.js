const http = require('http'); 
const express = require('express'); 
const bodyParser = require('body-parser'); 
const colors = require('colors'); 
const dotenv = require('dotenv').config(); 
const connectDB = require('./db'); 
const PORT = process.env.PORT || 3001; 
const app = express(); 
app.use(bodyParser.json()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 
app.get('/', (req, res) => { 
    connectDB(); 
    res.send('connected to Mongo DB') 
}) 
app.get('/', (req, res) => { res.send('this is root endpoint')}) 
app.post('/', (req, res) => { 
    console.log(req.body) 
    res.send('POST request to the homepage') }) 
app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
})