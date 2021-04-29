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
app.get("/yoruba-users", async (req, res) => {
    try {
        fetch("http://localhost:3001/users")
        .then(res => res.json())
        .then(json => {
            let count = 0;
            for(let i = 0; i < json.length; i++) {
                if (json[i].name.slice(0,3) === "Ola") {
                    count++;
                } else {
                    continue;
                }
            }
            res.send(`There are ${count} yoruba users on this app`);
        });
    } catch(e) {
        res.status(500).json(e);
    }
});

// VERIFY PASSWORD use user and password
// submit userId and password
app.post("/verify-password", async (req, res) => {
    let userId = req.body.userName_id;
    let password = req.body.password;
    let passwordId = req.body.passwordId;
    try {
        const userPromise = fetch(`http://localhost:3001/users/${userId}`);
        const passwordPromise = fetch(`http://localhost:3002/password/${passwordId}`);
        const promises = [userPromise, passwordPromise];
        const [userResponse, passwordResponse] = await Promise.all(promises);
        const userJson = await userResponse.json();
        const passwordJson = await passwordResponse.json();
        if(password === passwordJson.password) {
            res.status(200).json(`welcome ${userJson.name} your password is correct!`);
        } else {
            res.status(200).json(`Incorrect password ${userJson.name} try again`);
        }
    } catch(e) {
        res.status(500).json(e);
    }
});

module.exports = app;