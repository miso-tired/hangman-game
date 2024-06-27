// Dependencies and Config
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const { sequelize } = require("./models");
const cors = require("cors");
const BASE_URL = process.env.BASE_URL;

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hi. I am the testing page.",
  });
});

app.use("/api/users", require("./controllers/user"));

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to DB.");
  } catch (error) {
    console.error("Unable to connect to the DB. Do better.", error);
  }
  console.log(`Listening on port: ${PORT}`);
});

// Users
// id, name, username, password (FORGOT TO ADD WINS AND LOSSES)

// Matches
// id, user_id, username, wins, losses
