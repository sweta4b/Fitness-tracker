// store.js
import { createStore, applyMiddleware } from "redux";
import FitnessReducer from "./Reducer/FitnessReducer";
// import FoodReducer from "./Reducer/FoodReducer";
// import GoalReducer from "./Reducer/GoalReducer";
import thunk from "redux-thunk";

const store = createStore(FitnessReducer, applyMiddleware(thunk));

export default store;
