import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Signup from "./pages/Signup";                //ADD THIS
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id]
    );
  };

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        {/* ------------------- PUBLIC ROUTES ------------------- */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />   {/* ⭐ ADD THIS */}

        {/* ------------------- PROTECTED ROUTES ------------------- */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
