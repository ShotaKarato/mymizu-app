const express = require("express");
const knex = require("../knex/knex");
const route = express.Router();

route.use(require("../middleware/verifyToken"));

route.get("/", async (req, res) => {
		try {
      const user_id = res.locals.user;
      console.log(user_id);
			const refillLogs = await knex.select().table("refill").where("user_id", user_id);
			res.send(refillLogs);
		} catch (err) {
			console.error("Error loading refill logs!", err);
			res.sendStatus(500);
		}
	}
);

module.exports = route;
