// Business.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Address = new Schema({
  city: {
    type: String
  },
  state: {
    type: String
  }
},{
    collection: 'address'
});

module.exports = mongoose.model('Address', Address);