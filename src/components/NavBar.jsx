import React from "react";

function NavBar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <h1>NU Social Connect</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

export default NavBar;
