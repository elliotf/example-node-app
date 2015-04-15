'use strict';

exports.up = function(knex, Promise) {
  var todo = [];

  todo.push(knex.schema.createTable('users', function(table) {
    table.bigIncrements('id');
    table.string('email');
    table.timestamps();
  }));

  return Promise.all(todo);
};

exports.down = function(knex, Promise) {

};
