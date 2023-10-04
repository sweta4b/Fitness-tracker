// src/actions/foodActions.js
export const fetchFoods = () => async (dispatch) => {
  try {
    const response = await fetch("https://fitness-api.sweta4b.repl.co/food");
    const dataRecieved = await response.json();
    dispatch({ type: "FETCH_FOODS", payload: dataRecieved });
  } catch (error) {
    console.error("Error fetching food: ", error);
    dispatch({ type: "FETCH_FOOD_FAILURE" });
  }
};

export const addFoodItem = (foodItem) => async (dispatch) => {
  try {
    const response = await fetch("https://fitness-api.sweta4b.repl.co/food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(foodItem)
    });
    const data = await response.json();
    dispatch({ type: "ADD_FOOD", payload: data.data });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const removeFoodItem = (foodId) => async (dispatch) => {
  const url = `https://fitness-api.sweta4b.repl.co/food/${foodId}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    dispatch({ type: "REMOVE_FOOD", payload: data.data });
  } catch (error) {
    console.error("Error deleting food: ", error);
  }
};
