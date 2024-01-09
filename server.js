require("dotenv").config();
const mongoose = require("mongoose");

const filmLijstSchema = require("./schemas/filmLijst");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/addFilm", (req, res) => {
  filmLijstSchema.create({ name: req.query.name });
  res.send("success!");
})

app.listen(process.env.PORT, () => {
  console.log(`Listening to requests on port: ${process.env.PORT}`);
});

mongoose.connect(process.env.MONGOOSE_CONNECTION_URI).then(() => console.log("Connected to the mongodb database!"));
