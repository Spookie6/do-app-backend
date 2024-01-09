const { model, Schema } = require("mongoose");

module.exports = model(
  "filmLijst",
  new Schema({
    name: String,
  })
);