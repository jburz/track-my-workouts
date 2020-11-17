let db = require("../models/workoutModel.js");

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then((workouts) => {
                console.log('hit db.Workout.find');
                console.log(workouts);
                res.json(workouts);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(req.params.id, { $inc: { totalDuration: req.body.duration }, $push: { exercises: req.body } }, { new: true })
            .then(exercise => {
                console.log(exercise);
                res.json(exercise);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            });

    });

    app.post("/api/workouts", (req, res) => {
        console.log('hit /api/workouts post request');
        console.log(req.body);
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then((workouts) => {
                console.log('hit db.Workout.find');
                console.log(workouts);
                res.json(workouts);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    });
};