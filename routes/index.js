'use strict';

var express = require('express')
var router  = require('./router');

module.exports = function(app) {
  app.use(router);

  require('./main');
};
