exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("avatar")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("avatar").insert([{ user_id: 1, level: 0 }]);
    });
};
