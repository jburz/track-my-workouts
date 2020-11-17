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
            type: {
                type: String,
            },
            name: {
                type: String,
                trim: true
            },
            duration: {
                type: Number,
                default: 10
            },
            weight: {
                type: Number,
                default: 200
            },
            reps: {
                type: Number,
                default: 10
            },
            sets: {
                type: Number,
                default: 4
            },
            distance: {
                type: Number,
                default: 5
            }
        }
    ],
    totalDuration: {
        type: Number,
        default: 10
    }
});

//initialize workout model
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = { Workout };