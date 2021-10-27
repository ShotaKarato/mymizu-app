const express = require("express");
const knex = require("../knex/knex");
const route = express.Router();

route.get("/:user_id", async (req, res) => {
  try {
    const { user_id } = req.params;
    console.log(user_id);
    let results = await knex.select().table("avatar").where("user_id", user_id);
    res.send(results);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = route;
