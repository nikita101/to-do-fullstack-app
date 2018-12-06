exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('todo2', function (table) {
        table.increments('id').primary(); // creates incrementing number for id
        table.boolean('status'); // boolean true or false
        table.string('title') // this is the todo item itself
            .unique() 
            .notNullable() 
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('todo2') 
};