import React from "react";

function StudentCard({student, isFavorite, onToggleFavorite }) {
  return (
    <div className={`student-card ${isFavorite ? "favorite" : ""}`}>
      <img src={student.img} alt={student.name} />
      <h3>{student.name}</h3>
        <p><strong>Major:</strong> {student.major}</p>
        <p><strong>Interests:</strong> {student.interest}</p>
      <button onClick={onToggleFavorite}>
        {isFavorite ? "💜 Saved" : "🤍 Save"}
      </button>
    </div>
  );
}

export default StudentCard;