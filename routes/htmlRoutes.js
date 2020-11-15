const path = require("path");

module.exports = function (app) {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/exercise", (req, res) => {
        console.log("hit exercise route");
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    app.get("/stats", (req, res) => {
        console.log("hit stats route");
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
};