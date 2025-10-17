import { students } from "../data/students.js";
import StudentCard from "../components/StudentCard";
export default function Home({ favorites, toggleFavorite }) {
  return (
    <div className="home-page">
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