const express = require("express");
const passport = require("passport");
const route = express.Router();
const auth = require("./controllers/authController");

route.post("/sign-up", auth.signUp);

route.post("/sign-in", auth.signIn);

route.get(
	"/google",
	passport.authenticate("google", {
		scope: ["profile"],
	})
);

route.get(
	"/google/redirect",
	passport.authenticate("google"),
	(req, res) => {
		res.send("hello");
	}
);

module.exports = route;
