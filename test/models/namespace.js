var chai   = require('chai');
var expect = chai.expect;
var models = require('../../models');
var helper = require('../helper');

describe("models.Namespace", function() {
  var minimum_attrs;

  beforeEach(function() {
    minimum_attrs = {
      identifier: 'namespace identifier'
    };
  });

  it("can be saved", function(done) {
    models.Namespace
      .forge(minimum_attrs)
      .save()
      .exec(done);
  });
});
