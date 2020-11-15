const mongoose = require("mongoose");

//initialize mongoose schema
const Schema = mongoose.Schema;

//create new mongoose schema for workout model
const WorkoutSchema = new Schema({
    day: {
        type: Date
    },
    exercises: [
        {
            type: String,
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number
        }
    ]
});

//initialize workout model
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;