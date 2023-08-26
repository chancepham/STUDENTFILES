// REQUIRE MODULES
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/routes');
 
// Connecting to the database
   // WRITE YOUR CODE HERE TO CONNECT TO AN 'eCars' MONGO DATABASE
   // INCLUDE A CATCH FOR ANY ERROR MESSAGE
mongoose.connect('mongodb://localhost:27017/sodadiner')
    .then(() => {
        console.log("Successfully connected to database");
    }).catch(err => {
        console.log('Could not connect to MongoDB.');
        process.exit();
    });
app.use(express.json());
app.use(express.static('resources'));
global.__basedir = __dirname;
routes(app);
 
// Create a Server
app.listen(8081, function () {
 console.log(`Running on http://localhost:8081`);
});