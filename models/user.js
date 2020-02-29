const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
  },
});

// Create Mode & Export Model
module.exports = mongoose.model('User', userSchema);

