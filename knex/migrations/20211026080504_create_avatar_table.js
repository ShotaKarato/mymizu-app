exports.up = function (knex) {
  return knex.schema.createTable("avatar", function (table) {
    table.increments("id").primary();
    table.integer("user_id").references("id").inTable("users").notNullable();
    table.integer("level").notNullable();
    table.timestamp("date").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("avatar");
};
