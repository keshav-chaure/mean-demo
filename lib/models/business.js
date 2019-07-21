'use strict';

// Business.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// const Address=require('./address');
// Define collection and schema for Employee
var Employee = new Schema({
  emp_id: {
    type: Number
  },
  emp_name: {
    type: String
    /*,
    emp_address: {
      type: Address
    }
    */
  } }, {
  collection: 'employee'
});

module.exports = mongoose.model('Employee', Employee);