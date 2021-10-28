const express = require("express");
const knex = require("../knex/knex");
const route = express.Router();

route.use(require("../middleware/verifyToken"));

route.get("/", async (req, res) => {
  try {
    const user_id = res.locals.user;
    let results = await knex.select().table("avatar").where("user_id", user_id);
    res.send(results);
  } catch (error) {
    console.log(error.message);
  }
});

route.put("/", async (req, res) => {
  try {
    const user_id = res.locals.user;
    console.log(req.body);
    await knex("avatar").where("user_id", user_id).update(req.body);
    res.send(true);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = route;
