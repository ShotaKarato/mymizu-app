const express = require("express");
const knex = require("../knex/knex");
const route = express.Router();

route.use(require("../middleware/verifyToken"));

route.post("/", async (req, res) => {
  try {
    const user_id = res.locals.user;
    await knex("refill").insert({ user_id });
    res.send(true);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = route;
