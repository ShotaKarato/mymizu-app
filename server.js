const express = require("express");
require("dotenv").config();
const path = require("path");
const config = require("./knexfile")[process.env.NODE_ENV];
const knex = require("./knex/knex");
// require("./utils/passportSetup");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.use("/auth", require("./routes/auth"));
app.use("/avatar", require("./routes/avatar"));
app.use("/refill", require("./routes/refill"));
app.use("/logs", require("./routes/logs"));

app.get("/locations", async (req, res) => {
  const lat = Number(req.query.lat);
  const long = Number(req.query.long);

  const distance = 0.03;
  const endpoint = `https://my-mizu-dev2-gen8n.ondigitalocean.app/dev-api/search/area?c1=${
    lat + distance
  }&c2=${long - distance}&c3=${lat - distance}&c4=${long + distance}`;
  const request = await axios.get(endpoint, {
    headers: {
      Authorization: "Bearer 60|YuyKMkzJbvGUqtJwq9UqWlwtbEBmoOlxfBMQ0jlT",
    },
  });
  res.send(request.data);
});
app.listen(port, () => {
  console.log(`Server is runnings on${port}`);
});
(async () => {
  try {
    await knex.migrate.latest(config);
  } catch (error) {
    console.log(error);
  }
})();
