'use strict';

var Bookshelf = require('bookshelf');
var Knex      = require('knex');
var config    = require('config');

var db        = Knex(config.database);
var bookshelf = Bookshelf.initialize(db);
bookshelf.plugin('registry');

var Base = bookshelf.Model.extend({
  // event hooks, etc.
}, {
  // things like .findOrCreate, .create, etc.
});

module.exports           = Base;
module.exports.db        = db;
module.exports.bookshelf = bookshelf;
