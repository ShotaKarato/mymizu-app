const express = require("express");
require("dotenv").config();
const path = require("path");
const config = require("./knexfile")[process.env.NODE_ENV];
const knex = require("./knex/knex");
<<<<<<< HEAD
require("./utils/passportSetup");

=======
>>>>>>> 5acebf4f9278afe7a567e7de5355cab34f932cdc
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
	app.use(
		express.static(path.join(__dirname, "client/build"))
	);
}

<<<<<<< HEAD
app.use("/auth", require("./routes/auth"));

(async () => {
	try {
		await knex.migrate.latest(config);

		app.listen(port, () => {
			console.log(`Server is runnings on ${port}`);
		});
	} catch (error) {
		console.log(error);
	}
=======
(async () => {
  try {
    await knex.migrate.latest(config);

    app.listen(port, () => {
      console.log(`Server is runnings on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
>>>>>>> 5acebf4f9278afe7a567e7de5355cab34f932cdc
})();
