const express = require("express");
const knex = require("../knex/knex");
const route = express.Router();

route.post("/", async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = route;
