module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        console.log('hit getLastWorkout()');
        console.log(req.body);
    });

    app.put("/api/workouts/:id", (req, res) => {
        console.log('hit /api/workouts put request' + req.params.id);
        console.log(req.body);
    });

    app.post("/api/workouts", (req, res) => {
        console.log('hit /api/workouts post request');
        console.log(req.body);
    });

    app.get("/api/workouts/range", (req, res) => {
        console.log('hit getWorkoutsInRange()');
        console.log(req.body);
    });

    app.post("api/workouts/range", (req, res) => {
        console.log('hit /api/workouts/range post request');
        console.log(req.body);
    });


};