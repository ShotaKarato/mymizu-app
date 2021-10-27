const jwt = require("jsonwebtoken");
const verifyToken = async (req, res, next) => {
	const token = req.headers.token;
	if (token) {
		try {
			const verify = jwt.verify(
				token,
				process.env.jwtsecret
			);
			res.locals.user = verify.user;
			next();
		} catch (error) {
			return res.status(403).send("token is expired");
		}
	} else {
		res.status(403).send("no token");
	}
};
module.exports = verifyToken;
