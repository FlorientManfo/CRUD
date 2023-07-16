require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json);
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
