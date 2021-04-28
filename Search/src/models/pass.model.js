const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PasswordSchema = new Schema({
    userName_id: String,
    name: String,
    password: String,
});

module.exports = mongoose.model("Pass", PasswordSchema);