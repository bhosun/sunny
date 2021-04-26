const express = require("express");
const User = require("./models/user.model");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({ msg: "Users on this app!"});
})

app.get("/users", async (req, res) => {
    const users = await User.find({});
    res.json(users);
})

app.get("/users/:id", async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    res.json(user);
});

app.post("/users", async (req, res) => {
    const user = new User({ name: req.body.name });
    const saveUser = await user.save();
    res.json(saveUser);
});

module.exports = app;