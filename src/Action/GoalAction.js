// src/actions/goalActions.js
export const fetchGoals = () => async (dispatch) => {
  try {
    const response = await fetch("https://fitness-api.sweta4b.repl.co/goal");
    const dataRecieved = await response.json();
    dispatch({ type: "FETCH_GOALS", payload: dataRecieved });
  } catch (error) {
    console.error("Error fetching goal: ", error);
    dispatch({ type: "FETCH_GOAL_FAILURE" });
  }
};

export const addGoal = (goal) => async (dispatch) => {
  try {
    const response = await fetch("https://fitness-api.sweta4b.repl.co/goal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(goal)
    });
    const data = await response.json();
    dispatch({ type: "ADD_GOAL", payload: data.data });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const removeGoal = (goalId) => async (dispatch) => {
  const url = `https://fitness-api.sweta4b.repl.co/goal/${goalId}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    dispatch({ type: "REMOVE_GOAL", payload: data.data });
  } catch (error) {
    console.error("Error deleting goal: ", error);
  }
};
