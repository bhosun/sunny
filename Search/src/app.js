const express = require("express");
const fetch = require("node-fetch");
const Pass = require("./models/pass.model");
const User = require("./models/user.model");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({ msg: "search Page!"});
});

// GET NO OF USERS ON THE APP
app.get("/users", async (req, res) => {
    try {
        fetch("http://localhost:3001/users")
        .then(res => res.json())
        .then(json => res.send(` there are ${json.length} users on this app`));
    } catch(e) {
        res.status(500).json(e);
    }
});

// GET YORUBA USERS ON THE APP
app.get("/yorubausers", async (req, res) => {
    try {
        fetch("http://localhost:3001/users")
        .then(res => res.json())
        .then(json => res.send(` there are ${json.length} users on this app`));
    } catch(e) {
        res.status(500).json(e);
    }
});

// VERIFY PASSWORD use user and password


module.exports = app;