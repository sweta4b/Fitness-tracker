import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFoodItem, fetchFoods, removeFoodItem } from "../Action/FoodAction";
import "./Page.css";
import { Button } from "@mui/material";
import RamenDiningIcon from "@mui/icons-material/RamenDining";

export default function Food() {
  const [foodItem, setFoodItem] = useState({
    foodName: "",
    calories: "",
    carbohydrates: "",
    fat: "",
    protein: ""
  });
  const foods = useSelector((state) => state.foods);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoods());
  }, [dispatch]);

  const handleAddFood = () => {
    dispatch(addFoodItem(foodItem));
    setFoodItem({
      foodName: "",
      calories: "",
      carbohydrates: "",
      fat: "",
      protein: ""
    });
  };

  const handleRemoveFood = (foodId) => {
    dispatch(removeFoodItem(foodId));
  };

  return (
    <div className="container">
      <h1>Food Items</h1>
      <div className="add-form">
        <input
          type="text"
          placeholder="Food Name"
          value={foodItem.foodName}
          onChange={(e) =>
            setFoodItem({ ...foodItem, foodName: e.target.value })
          }
          required
        />
        <input
          type="number"
          placeholder="Calories"
          value={foodItem.calories}
          onChange={(e) =>
            setFoodItem({ ...foodItem, calories: e.target.value })
          }
          required
        />
        <input
          type="number"
          placeholder="Carbohydrates (gram)"
          value={foodItem.carbohydrates}
          onChange={(e) =>
            setFoodItem({ ...foodItem, carbohydrates: e.target.value })
          }
          required
        />
        <input
          type="number"
          placeholder="Fat (gram)"
          value={foodItem.fat}
          onChange={(e) => setFoodItem({ ...foodItem, fat: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Protein (gram)"
          value={foodItem.protein}
          onChange={(e) =>
            setFoodItem({ ...foodItem, protein: e.target.value })
          }
          required
        />
        <Button onClick={handleAddFood}>Add Food</Button>
      </div>
      <div className="data-box">
        {foods?.map((food) => (
          <div key={food._id} className="data-container">
            <h2 className="space">
              <span>{food.foodName.toUpperCase()}</span> {""}
              <RamenDiningIcon />
            </h2>
            <h4 className="space">
              <span>Fat:</span> {food.fat}g
            </h4>
            <h4 className="space">
              <span>Protein:</span> {food.protein}g
            </h4>
            <h4 className="space">
              <span>Calories:</span> {food.calories}g
            </h4>
            <h4 className="space">
              <span>Carbohydrates:</span> {food.carbohydrates}g
            </h4>
            <Button onClick={() => handleRemoveFood(food._id)}>Remove</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
