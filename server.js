const express = require("express");
const path = require("path");
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "/public")));

require("./routes/htmlRoutes.js")(app);

app.listen(PORT, () => {
    console.log("Server listening on PORT " + PORT);
    console.log(__dirname);
});