exports.up = function (knex, Promise) {
  return knex.schema.createTable('login_user', t => {
    t.increments('id').unsigned().primary();
    t.string('email').notNull();
    t.string('password_digest').notNull();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('login_user');
};
