import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const getStyles = {
    textDecoration: "none",
    color: "rgb(181, 201, 189)"
  };

  return (
    <div className="header">
      <nav className="navlink">
        <h2>Fitness Tracker</h2>
        <div id="animation"></div>
        <div className="link-list">
          <h2>
            <NavLink style={getStyles} to="/">
              Dashboard
            </NavLink>
          </h2>
          <h2>
            <NavLink style={getStyles} to="/exercise">
              Exercise
            </NavLink>
          </h2>
          <h2>
            <NavLink style={getStyles} to="/food">
              Food
            </NavLink>
          </h2>
          <h2>
            <NavLink style={getStyles} to="/goal">
              Goal
            </NavLink>
          </h2>
        </div>
      </nav>
    </div>
  );
}
