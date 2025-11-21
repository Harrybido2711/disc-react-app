import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function NavBar({ darkMode, setDarkMode }) {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <h1>NU Social Connect</h1>

      <div className="nav-links">
        {/* Main Navigation */}
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/users" className="nav-btn">Users</Link>

        {/* Auth Buttons */}
        {!isLoggedIn && (
          <>
            <Link to="/login" className="nav-btn">Login</Link>
            <Link to="/signup" className="nav-btn">Sign Up</Link>
          </>
        )}

        {isLoggedIn && (
          <button onClick={logout} className="nav-btn logout-btn">
            Logout
          </button>
        )}

        {/* Dark Mode Toggle (moved to the far right by CSS .mode-btn) */}
        <button
          className="mode-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
