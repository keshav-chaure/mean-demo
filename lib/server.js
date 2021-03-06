'use strict';

//import express from 'express'
var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./db'),
    port = 4200,
    app = express(),
    businessRoutes = require('./routes/business.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(function () {
  console.log('Database is connected');
}, function (err) {
  console.log('Can not connect to the database' + err);
});

app.use(bodyParser.json());
app.use(cors());
app.use('/business', businessRoutes);
// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, function () {
  return console.log('Example app listening on port ' + port + '!');
});