const express = require("express");
const path = require("path");

//route logging package
const logger = require("morgan");
//mongoose pacakge
const mongoose = require("mongoose");

//initialize db connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

const app = express();
const PORT = process.env.PORT || 8080;

//console.log route requests
app.use(logger("dev"));

//middleware for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//middleware for public file pathing
app.use(express.static(path.join(__dirname, "/public")));

//require routes
require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

app.listen(PORT, () => {
    console.log("Server listening on PORT " + PORT);
});