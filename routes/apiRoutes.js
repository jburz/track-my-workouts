module.exports = function (app) {
    app.put("/api/workouts", (req, res) => {
        console.log('hit /api/workouts put request');
        console.log(req.body);
    });

    app.post("/api/workouts/range", (req, res) => {
        console.log('hit /api/workouts/range post request');
        console.log(req.body);
    })
};