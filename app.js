require("dotenv").config();
const express = require("express");
const app = express();
const dbConnect = require("./Database/connect");
const port = process.env.PORT || 5000;
const dbUrl = process.env.MONGO_URI;
dbConnect(dbUrl);
app.listen(port, () => {
	console.log("app is listening on port ", port);
});
console.log();
console.log();
