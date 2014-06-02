exports.up = function(knex, Promise) {
  var todo = [];

  todo.push(knex.schema.createTable('namespace', function(t){
    t.increments('id').primary();

    t.text('label');
  }));

  todo.push(knex.schema.createTable('exams', function(t){
    t.increments('id').primary();
    t.integer('namespace_id');

    t.text('title');
  }));

  todo.push(knex.schema.createTable('exams_questions', function(t){
    t.increments('id').primary();
    t.integer('exam_id');
    t.integer('question_id');

    t.text('question_order');
    t.text('choice_order'); // questions are reused with a different order
  }));

  todo.push(knex.schema.createTable('questions', function(t){
    t.increments('id').primary();
    t.integer('namespace_id');

    t.integer('text_id');
  }));

  todo.push(knex.schema.createTable('choices', function(t){
    t.increments('id').primary();
    t.integer('question_id');

    t.integer('text_id');
    t.boolean('is_correct');
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
