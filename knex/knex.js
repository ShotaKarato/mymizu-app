require("dotenv").config();

const knex = require("knex")({
  client: "pg",
  connection:
    process.env.DATABASE_URL ||
    `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
  searchPath: "public",
  migrations: {
    directory: `${__dirname}/migrations`,
  },
});
module.exports = knex;
