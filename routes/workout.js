const express = require("express");
const {
    getWorkouts,
    createWorkout,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require("../controllers/workoutController");

const router = express.Router();

// GET All workouts
router.get("/", getWorkouts);

// GET Single workout
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELETE a new workout
router.delete("/:id", deleteWorkout);

// UPDATE a new workout
router.patch("/:id", updateWorkout);

module.exports = router;