const express = require("express");
const knex = require("../knex/knex");
const route = express.Router();

route.use(require("../middleware/verifyToken"));

route.get("/", async (req, res) => {
  try {
    const user_id = res.locals.user;
    console.log(user_id);
    let results = await knex.select().table("avatar").where("user_id", user_id);
    res.send(results);
  } catch (error) {
    console.log(error.message);
  }
});

route.put("/", async (req, res) => {
  try {
    const user_id = res.locals.user;
    await knex("avatar").where("user_id", user_id).update(req.body);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = route;
