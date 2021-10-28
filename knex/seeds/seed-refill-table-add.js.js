exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("refill")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("refill").insert([
        { user_id: 1 },
        { user_id: 1 },
        { user_id: 1 }
      ]);
    });
};

