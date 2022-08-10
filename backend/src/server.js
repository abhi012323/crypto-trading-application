const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sequelize = require("./util/database");
const routes = require("./routes/routes");
require("dotenv").config();
var cors = require("cors");
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use("/", routes);
module.exports = app;
const port = process.env.PORT;
sequelize
  .sync()
  .then((result) => {
    console.log(result);
    app.listen(port, async () => {
      console.log(`listening to port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
  