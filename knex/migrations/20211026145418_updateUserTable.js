const e = require("express");

exports.up = function (knex) {
	return knex.schema.table("users", (table) => {
		table.unique("user_name");
		table.unique("email");
	});
};

exports.down = function (knex) {
	return knex.schema.table("users", () => {});
};
