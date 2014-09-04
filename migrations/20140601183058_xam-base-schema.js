exports.up = function(knex, Promise) {
  var todo = [];

  todo.push(knex.schema.createTable('namespaces', function(t){
    t.increments('id').primary();
    t.string('identifier');
  }));

  return Promise.all(todo);
};

exports.down = function(knex, Promise) {
};
