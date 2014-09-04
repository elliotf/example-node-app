'use strict';

var fs   = require('fs');
var path = require('path');
var base = require('./base');

var bookshelf = base.bookshelf;
bookshelf.resolve = function(name) {
  return require('./' + name);
};

var files = fs.readdirSync(__dirname);

files.forEach(function(filename) {
  if (filename === path.basename(__filename)) {
    return;
  }

  var model_name = path.basename(filename, '.js');
  model_name = model_name.charAt(0).toUpperCase() + model_name.slice(1);

  module.exports[model_name] = bookshelf.model(filename);
});
