import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home"; // Home module is defined in the Home.jsx file in pages folder
import Users from "./pages/Users";// Similar for Users
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false); // change in the mode of display
  const [favorites, setFavorites] = useState(() => { // store information in the local storage
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => { //when favorites changes, the useEffect will react, storing new favorites into the list of favorites
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
        <Route
          path="/"
          element={<Home favorites={favorites} toggleFavorite={toggleFavorite} />} //"/"
        />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}
export default App;