import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import StudentCard from "./components/StudentCard";
import lucasPhoto from "./assets/Photos/Lucas.jpg";
import CharlesPhoto from "./assets/Photos/Charles.jpg";
import EricPhoto from "./assets/Photos/Eric.jpg";



function App() {
  const [darkMode, setDarkMode] = useState(false);// set the initial condition as bright mode
  const [favorites, setFavorites] = useState([]);// record the id of the favorite students

  const students = [
    { id: 1, name: "Lucas", major: "ISP", interest: "Singing, Research", img: lucasPhoto },
    { id: 2, name: "Charles", major: "LOC", interest: "Do magic, Startups", img: CharlesPhoto },
    { id: 3, name: "Eric", major: "Applied Mathematics", interest: "Music", img: EricPhoto},

  ]; // basic info of students
  useEffect(() => {
    console.log("Favorites updated:", favorites);
  }, [favorites]);// when favorites changes, the web would update the useeffect, telling us what happens to favorites

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id]
    );//when click on the button, where the id of certain student should be added/ removed from the favorites(listof id)
  };  

//darkMode or not
//Navigation Bar
//Title: Discover New Friends
//StudentCard
  return ( 
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />   
      <h2>Discover New Friends</h2>
      <div className="student-gallery">
        {students.map((s) => (
          <StudentCard
            key={s.id}
            student={s}
            isFavorite={favorites.includes(s.id)}
            onToggleFavorite={() => toggleFavorite(s.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
