module.exports = (app) => {
    app.get("/", (req, res) => {
        res.sendFile("/index.html");
    });

    app.get("/exercise", (req, res) => {
        res.sendFile("/exercise.html");
    });

    app.get("/stats", (req, res) => {
        res.sendFile("/stats.html");
    });
};
