const express = require("express");
const Pass = require("./models/pass.model");
const User = require("./models/user.model");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({ msg: "search Page!"});
});


module.exports = app;