require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./models/index");
db.sequelize
  .sync()
  .then(() => {
    console.log("Database synced successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

require("./routes/index")(app, db);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
