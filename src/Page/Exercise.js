import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Page.css";
import {
  addExercise,
  fetchExercises,
  removeExercise
} from "../Action/ExercisesAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Button } from "@mui/material";

export default function Exercise() {
  const [exercise, setExercise] = useState({
    exerciseName: "",
    duration: "",
    exerciseType: ""
  });
  const exercises = useSelector((state) => state.exercises);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  const handleAddExercise = () => {
    dispatch(addExercise(exercise));
    setExercise({
      exerciseName: "",
      duration: "",
      exerciseType: ""
    });
  };

  const handleRemoveExercise = (exerciseId) => {
    dispatch(removeExercise(exerciseId));
  };

  return (
    <div className="container">
      <h1>Exercise Tracking</h1>
      <div className="add-form">
        <input
          type="text"
          placeholder="Exercise Name"
          value={exercise.exerciseName}
          onChange={(e) =>
            setExercise({ ...exercise, exerciseName: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Duration (minutes)"
          value={exercise.duration}
          onChange={(e) =>
            setExercise({ ...exercise, duration: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Exercise type"
          value={exercise.exerciseType}
          onChange={(e) =>
            setExercise({ ...exercise, exerciseType: e.target.value })
          }
        />
        <Button onClick={handleAddExercise}>Add Exercise</Button>
      </div>
      <div className="data-box">
        {exercises?.map((exercise) => (
          <div className="data-container" key={exercise._id}>
            <h2>{exercise.exerciseName.toUpperCase()}</h2>
            <h3 className="space">
              {" "}
              {exercise.duration} minutes <AccessTimeIcon fontSize="30px" />
            </h3>
            <h4 className="space">
              {exercise.caloriesBurned} calories burned{" "}
              <WhatshotIcon fontSize="30px" sx={{ color: "orange" }} />
            </h4>
            <Button onClick={() => handleRemoveExercise(exercise._id)}>
              Remove
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
