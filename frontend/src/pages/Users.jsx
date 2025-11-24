import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";  //NEW
import { Navigate } from "react-router-dom";            //NEW

export default function Users() {
  const { isLoggedIn } = useContext(AuthContext);       

  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const apiUrl = import.meta.env.VITE_API_URL;

  // ⭐ If user is not logged in, redirect
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  useEffect(() => {
    async function fetchProfiles() {
      try {
        const res = await fetch(`${apiUrl}/users/profiles`);
        const data = await res.json();
        setProfiles(data);
      } catch (err) {
        console.error("Error fetching profiles:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProfiles();
  }, [apiUrl]);

  const filteredProfiles = profiles.filter((p) => {
    const search = searchTerm.toLowerCase();
    return (
      (p.bio && p.bio.toLowerCase().includes(search)) ||
      (p.date_of_birth && p.date_of_birth.includes(search)) ||
      (p.id && p.id.includes(search))
    );
  });

  if (loading) return <p>Loading profiles...</p>;

  return (
    <div className="users-page">
      <h2>Discover User Profiles</h2>
      <p>Explore Supabase users and their bios!</p>

      <input
        type="text"
        placeholder="Search by bio or date..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="user-gallery">
        {filteredProfiles.map((p) => (
          <div key={p.id} className="user-card">
            <h3>{p.bio || "No bio yet"}</h3>
            <p><b>Date of Birth:</b> {p.date_of_birth || "N/A"}</p>
            <p><b>ID:</b> {p.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
