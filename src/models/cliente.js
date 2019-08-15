const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClienteSchema = new Schema({
  first_Name: { type: String, requiered: true },
  last_Name: { type: String, required: true },
  email: { type: String, require: true },
  pwd: { type: String, requiered: true }
});

module.exports = mongoose.model("Cliente", ClienteSchema);
