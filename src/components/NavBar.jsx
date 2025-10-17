import React from "react";
import { Link } from "react-router-dom";

function NavBar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <h1>NU Social Connect</h1>

      <div className="nav-links">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/users" className="nav-btn">Users</Link>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;