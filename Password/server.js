const app = require("./src/app");
const { DB_URI } = require("./src/config/index");
const mongoose = require("mongoose");
mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true });

app.listen(3002, () => {
    console.log("running on port 3002!!");
});