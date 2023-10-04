import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExercises } from "../Action/ExercisesAction";
import { fetchFoods } from "../Action/FoodAction";
import { fetchGoals } from "../Action/GoalAction";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import PendingActionsIcon from "@mui/icons-material/PendingActions";

export default function Dashboard() {
  const dispatch = useDispatch();

  const [totalCaloriesBurned, setTotalCaloriesBurned] = useState(0);
  const [totalCaloriesConsumed, setTotalCaloriesConsumed] = useState(0);
  const [totalCaloriesGoal, setTotalCaloriesGoal] = useState(0);
  const [remainingCaloriesToGoal, setRemainingCaloriesToGoal] = useState(0);

  const foods = useSelector((state) => state.foods);
  const exercises = useSelector((state) => state.exercises);
  const goals = useSelector((state) => state.goals);

  useEffect(() => {
    dispatch(fetchExercises());
    dispatch(fetchFoods());
    dispatch(fetchGoals());
  }, [dispatch]);

  function calculateCaloriesBurned(exercises, setTotalCaloriesBurned) {
    return setTotalCaloriesBurned(
      exercises.reduce((acc, curr) => acc + curr.caloriesBurned, 0)
    );
  }

  function calculateTotalCaloriesConsumed(foods, setTotalCaloriesConsumed) {
    return setTotalCaloriesConsumed(
      foods.reduce((acc, curr) => acc + curr.calories, 0)
    );
  }

  function calculateTotalCaloriesGoal(goals, setTotalCaloriesGoal) {
    return setTotalCaloriesGoal(
      goals.reduce(
        (acc, curr) =>
          curr.status === "completed" ? acc + curr.targetCalories : acc,
        0
      )
    );
  }

  function calculateRemainingCaloriesToGoal(goals, setRemainingCaloriesToGoal) {
    return setRemainingCaloriesToGoal(
      goals.reduce(
        (acc, curr) =>
          curr.status === "in progress" ? acc + curr.targetCalories : acc,
        0
      )
    );
  }

  useEffect(() => {
    calculateCaloriesBurned(exercises, setTotalCaloriesBurned);
    calculateTotalCaloriesConsumed(foods, setTotalCaloriesConsumed);
    calculateTotalCaloriesGoal(goals, setTotalCaloriesGoal);
    calculateRemainingCaloriesToGoal(goals, setRemainingCaloriesToGoal);
  }, [exercises, foods, goals]);

  return (
    <div className="container dashboard">
      <div className="heading-box">
        <h1 className="bold">TRACK</h1>
        <h1 className="bold">YOUR</h1>
        <h1 className="bold">CALORIES</h1>
      </div>
      <div className="data-box">
        <div className="data-container circle-box">
          <h2>Total Calories Burned: </h2>
          <h4 style={{ color: "orange" }}>
            {totalCaloriesBurned} calories burned
          </h4>
          <WhatshotIcon fontSize="large" sx={{ color: "orange" }} />
        </div>
        <div className="data-container circle-box">
          <h2>Total Calories Consumed: </h2>
          <h4 style={{ color: "yellowgreen" }}>
            {totalCaloriesConsumed} calories consumed
          </h4>
          <RamenDiningIcon fontSize="large" sx={{ color: "yellowgreen" }} />
        </div>
        <div className="data-container circle-box">
          <h2>Total Calories Goal: </h2>
          <h4 style={{ color: "green" }}>{totalCaloriesGoal} calories goal</h4>
          <TaskAltRoundedIcon fontSize="large" sx={{ color: "green" }} />
        </div>
        <div className="data-container circle-box">
          <h2>Remaining Calories to Goal: </h2>
          <h4 style={{ color: "blue" }}>
            {remainingCaloriesToGoal} calories remaining
          </h4>
          <PendingActionsIcon fontSize="large" sx={{ color: "blue" }} />
        </div>
      </div>
      <div className="runner"></div>
    </div>
  );
}
