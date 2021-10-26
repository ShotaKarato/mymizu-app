const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 4000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
