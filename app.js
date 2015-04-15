'use strict';

var express = require('express');
var app     = express();

require('./routes')(app);

app.set('view engine', 'jade');

module.exports = app;
