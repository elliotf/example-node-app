exports.up = function(knex, Promise) {
  var todo = [];

  todo.push(knex.schema.createTable('namespace', function(t){
    t.increments('id').primary();
  }));

  todo.push(knex.schema.createTable('exams', function(t){
    t.increments('id').primary();
    t.integer('namespace_id');
  }));

  todo.push(knex.schema.createTable('exams_questions', function(t){
    t.increments('id').primary();
    t.integer('exam_id');
    t.integer('question_id');

    t.text('question_sort_order');
    t.text('choice_sort_order');
  }));

  todo.push(knex.schema.createTable('questions', function(t){
    t.increments('id').primary();
    t.integer('namespace_id');

    t.integer('text_id');
  }));

  todo.push(knex.schema.createTable('choices_questions', function(t){
    t.increments('id').primary();
    t.integer('choice_id');
    t.integer('question_id');

    t.text('sort_order');
  }));

  todo.push(knex.schema.createTable('choices', function(t){
    t.increments('id').primary();

    t.integer('text_id');
  }));

  todo.push(knex.schema.createTable('texts', function(t){
    t.increments('id').primary();
    t.integer('namespace_id');

    t.text('content');
  }));

  return Promise.all(todo);
};

exports.down = function(knex, Promise) {
};
