import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGoal, fetchGoals, removeGoal } from "../Action/GoalAction";
import { Button } from "@mui/material";

export default function Goal() {
  const [goal, setGoal] = useState({
    goalName: "",
    goalDescription: "",
    targetDate: "",
    targetCalories: "",
    status: ""
  });
  const goals = useSelector((state) => state.goals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  const convertDate = (date) => {
    const timeStamp = new Date(date);
    const newTime = timeStamp.toDateString();
    return newTime;
  };

  const handleAddGoal = () => {
    dispatch(addGoal(goal));
    setGoal({
      goalName: "",
      goalDescription: "",
      targetDate: "",
      targetCalories: "",
      status: ""
    });
  };

  const handleRemoveGoal = (goalId) => {
    dispatch(removeGoal(goalId));
  };

  return (
    <div className="container">
      <h1>Goals</h1>
      <div className="add-form">
        <input
          type="text"
          placeholder="Goal Name"
          value={goal.goalName}
          onChange={(e) => setGoal({ ...goal, goalName: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={goal.goalDescription}
          onChange={(e) =>
            setGoal({ ...goal, goalDescription: e.target.value })
          }
          required
        />
        <input
          type="date"
          placeholder="Target date"
          value={goal.targetDate}
          onChange={(e) => setGoal({ ...goal, targetDate: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Target calories"
          value={goal.targetCalories}
          onChange={(e) => setGoal({ ...goal, targetCalories: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Status(In progress, completed, abondened)"
          value={goal.status}
          onChange={(e) => setGoal({ ...goal, status: e.target.value })}
          required
        />
        <Button onClick={handleAddGoal}>Add Goal</Button>
      </div>
      <div className="data-box">
        {goals?.map((goal) => (
          <div key={goal._id} className="data-container">
            <h2>{goal.goalName.toUpperCase()}</h2>
            <h4>{goal.goalDescription}</h4>
            <h4>{convertDate(goal.targetDate)}</h4>
            <h4>{goal.targetCalories} Calories</h4>
            <p
              style={{
                color:
                  goal.status === "completed"
                    ? "green"
                    : goal.status === "in progress"
                    ? "blue"
                    : "red"
              }}
            >
              {goal.status.toUpperCase()}
            </p>
            <Button onClick={() => handleRemoveGoal(goal._id)}>Remove</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
