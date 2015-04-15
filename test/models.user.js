'use strict';

var models = require('../models');
var helper = require('./helper')
var expect = helper.expect;

describe("models.User", function() {
  var minimum_attrs;

  beforeEach(function() {
    minimum_attrs = {
      email: 'email@example.com'
    };
  });

  it("can be saved", function(done) {
    var now   = new Date();
    var clock = this.sinon.useFakeTimers(now.valueOf());
    models.User
      .forge(minimum_attrs)
      .save()
      .exec(function(err, user) {
        clock.restore();

        expect(err).to.not.exist();

        var actual = user.toJSON();

        expect(actual.id).to.be.a('number');
        delete actual.id;
        expect(actual).to.deep.equal({
          email:      'email@example.com',
          created_at: now,
          updated_at: now
        });

        done();
      });
  });
});
