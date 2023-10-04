import Header from "./Component/Header";
import Dashboard from "./Page/Dashboard";
import Exercise from "./Page/Exercise";
import Food from "./Page/Food";
import Goal from "./Page/Goal";
import "./styles.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/food" element={<Food />} />
        <Route path="/goal" element={<Goal />} />
      </Routes>
    </div>
  );
}
