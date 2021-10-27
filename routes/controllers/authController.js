const db = require("../../knex/knex");
const bcrypt = require("bcrypt");
const generateToken = require("../../utils/generateToken");

const signIn = async (req, res) => {
	try {
		const { usernameOrEmail, password } = req.body;
		const user = await db("users")
			.select("*")
			.where({ user_name: usernameOrEmail })
			.orWhere({ email: usernameOrEmail });
		if (user.length) {
			const isTrue = await bcrypt.compare(
				password,
				user[0].password
			);
			if (isTrue) {
				const token = generateToken(user[0].id);
				delete user[0].password;
				delete user[0].id;
				res.send({ token, user: user[0] });
			} else {
				res.status(403).send("wrong password");
			}
		} else {
			res.status(403).send("user does not exist");
		}
	} catch (error) {
		console.log(error);
	}
};

const signUp = async (req, res) => {
	try {
		const { user_name, password, email } = req.body;
		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(password, salt);
		const user = await db
			.insert({ user_name, password: hash, email })
			.into("users")
			.returning(["id", "user_name", "email"]);
		await db
			.insert({ user_id: user[0].id, level: 0 })
			.into("avatar");
		const token = generateToken(user[0].id);
		delete user[0].id;
		res.send({ token, user: user[0] });
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	signIn,
	signUp,
};
