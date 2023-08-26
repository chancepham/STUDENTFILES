// REQUIRE MONGOOSE
const mongoose = require('mongoose');

// CREATE SCHEMA THAT STORES DATA TO DATABASE
// EACH CAR SHOULD HAVE A YEAR, MAKE, MODEL, COLOR, AND MAX SPEED ASSOCIATED WITH IT)
// COLORS MUST BE black, silver, red, blue, gold, or white; and default to black

const SodaSchema = mongoose.Schema({
  // WRITE YOUR CODE HERE TO CREATE A SCHEMA

  name: {
    type: String,
    required:true
  },
  fizziness: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  serving: {
    type: Boolean,
    default:false
  }
});

// EXPORT VEHICLE SCHEMA
module.exports = mongoose.model('Soda', SodaSchema);
