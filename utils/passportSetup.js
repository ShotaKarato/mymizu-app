const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

passport.use(
	new GoogleStrategy(
		{
			callbackURL:
				"http://localhost:4000/auth/google/redirect",
			clientID:
				"191800803188-ksjfdvfg48qa4gese4hop45au6gr1pcq.apps.googleusercontent.com",
			clientSecret: "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",
		},
		(accessToken, refreshToken, profile, done) => {
			//callback
			console.log(profile);
		}
	)
);
