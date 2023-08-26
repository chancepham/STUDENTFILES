// REQUIRE MONGOOSE
const mongoose = require('mongoose');

// CREATE SCHEMA THAT STORES DATA TO DATABASE
// EACH CAR SHOULD HAVE A YEAR, MAKE, MODEL, COLOR, AND MAX SPEED ASSOCIATED WITH IT)
// COLORS MUST BE black, silver, red, blue, gold, or white; and default to black

const DinerSchema = mongoose.Schema({
    // WRITE YOUR CODE HERE TO CREATE A SCHEMA

    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    serving: {
        type: Array,
        required: false,
        default: []
    }
});

// EXPORT VEHICLE SCHEMA
module.exports = mongoose.model('Diner', DinerSchema);
