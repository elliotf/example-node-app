'use strict';

var _      = require('lodash');
var async  = require('async');
var chai   = require('chai');
var config = require('config');
var models = require('../models');

chai.config.includeStack = true;

chai.use(require('dirty-chai')); // avoid property assertions
chai.use(require('sinon-chai'));
require('mocha-sinon'); // provide `this.sinon` sandbox in tests

module.exports.expect = chai.expect;

before(function(done) {
  // migrate the DB once for each test suite
  models.Base.db.migrate
    .latest(config.database)
    .exec(done);
});

beforeEach(function(done) {
  var todo = [];

  // delete all rows for each model
  _.each(models, function(model, model_name) {
    if ('function' !== typeof model.forge) {
      return;
    }

    var table_name = model.forge().tableName;

    // avoid errors due to the base model
    if (!table_name) {
      return;
    }

    todo.push(function(done) {
      models.Base
        .db(table_name)
        .where({})
        .del()
        .exec(done);
    });
  });

  async.parallel(todo, done);
});
