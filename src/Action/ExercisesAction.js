// exerciseActions.js

export const fetchExercises = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://fitness-api.sweta4b.repl.co/exercises"
    );
    const dataRecieved = await response.json();
    dispatch({ type: "FETCH_EXERCISES", payload: dataRecieved });
  } catch (error) {
    console.error("Error fetching exercises: ", error);
    dispatch({ type: "FETCH_EXERCISE_FAILURE" });
  }
};

export const addExercise = (exercise) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://fitness-api.sweta4b.repl.co/exercises",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(exercise)
      }
    );
    const data = await response.json();
    dispatch({ type: "ADD_EXERCISE", payload: data.data });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const removeExercise = (exerciseId) => async (dispatch) => {
  const url = `https://fitness-api.sweta4b.repl.co/exercises/${exerciseId}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    dispatch({ type: "REMOVE_EXERCISE", payload: data.data });
  } catch (error) {
    console.error("Error deleting exercises: ", error);
  }
};
