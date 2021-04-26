const express = require("express");
const Pass = require("./models/pass.model");
const User = require("./models/user.model");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({ msg: "password page for this app!"});
})

app.get("/password", async (req, res) => {
    const pass = await Pass.find({});
    res.json(pass);
})

app.get("/password/:id", async (req, res) => {
    const id = req.params.id;
    const pass = await Pass.findById(id);
    res.json(pass);
});

app.post("/password", async (req, res) => {
    let userNameId = await req.body.userName_id;
    let user = await User.findById(userNameId);
    let name = await user.name;
    const pass = new Pass({ userName_id: req.body.userName_id, name: name, password: req.body.password });
    const savePassword = await pass.save();
    res.json(savePassword);
});

module.exports = app;