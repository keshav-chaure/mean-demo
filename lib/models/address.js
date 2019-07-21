'use strict';

// Business.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Business
var Address = new Schema({
  city: {
    type: String
  },
  state: {
    type: String
  }
}, {
  collection: 'address'
});

module.exports = mongoose.model('Address', Address);