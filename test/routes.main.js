'use strict';

var app    = require('../app');
var helper = require('./helper')
var expect = helper.expect;

describe('routes.index', function() {
  describe('GET /', function() {
    context('when not logged in', function() {
      it('returns the logged out homepage', function(done) {
        this.agent(app)
          .get('/')
          .expect(200)
          .end(function(err, res) {
            expect(err).to.not.exist();

            var $ = helper.$(res.text);

            var welcome = $('h1');
            expect(welcome.text()).to.equal('ohai!');

            done();
          });
      });
    });
  });
});
