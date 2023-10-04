// exerciseReducer.js
const initialState = {
  exercises: [],
  foods: [],
  goals: [],
  loading: false,
  error: null
};

const ExerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EXERCISES":
      return {
        ...state,
        exercises: action.payload,
        loading: false
      };
    case "FETCH_EXERCISE_LOADING":
      return { ...state, loading: true };
    case "FETCH_EXERCISE_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error while fetching exercises"
      };
    case "ADD_EXERCISE":
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
        loading: false,
        error: null
      };
    case "REMOVE_EXERCISE":
      return {
        ...state,
        exercises: state.exercises.filter(
          (exercise) => exercise._id !== action.payload._id
        ),
        loading: false,
        error: null
      };
    case "ADD_FOOD":
      return {
        ...state,
        foods: [...state.foods, action.payload],
        loading: false,
        error: null
      };
    case "FETCH_FOODS":
      return {
        ...state,
        foods: action.payload,
        loading: false
      };
    case "FETCH_FOOD_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error while fetching food"
      };
    case "REMOVE_FOOD":
      return {
        ...state,
        foods: state.foods.filter((food) => food._id !== action.payload._id),
        loading: false,
        error: null
      };
    case "FETCH_GOALS":
      return {
        ...state,
        goals: action.payload,
        loading: false
      };
    case "ADD_GOAL":
      return {
        ...state,
        goals: [...state.goals, action.payload],
        loading: false,
        error: null
      };
    case "REMOVE_GOAL":
      return {
        ...state,
        goals: state.goals.filter((goal) => goal._id !== action.payload._id),
        loading: false,
        error: null
      };
    case "FETCH_GOAL_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error while fetching goals"
      };
    default:
      return state;
  }
};

export default ExerciseReducer;
