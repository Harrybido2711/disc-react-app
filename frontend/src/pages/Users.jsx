import { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://disc-assignment-5-users-api-iyct.onrender.com/api/users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    (u) =>
      u.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.major.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="loading-text">Loading NU students...</p>;

  return (
    <div className="users-page">
      <h2>Connect with Wildcats</h2>
      <p>Meet students from across Northwestern — filter by name or major!</p>

      <input
        type="text"
        placeholder="Search by name or major..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="user-gallery">
        {filteredUsers.map((u) => (
          <div key={u.id} className="user-card">
            <img src={u.profilePicture} alt={u.firstName} />
            <h3>{u.firstName} {u.lastName}</h3>
            <p><b>Major:</b> {u.major}</p>
            <p><b>Bio:</b> {u.bio}</p>
            <p><i>Class of {u.graduationYear || "—"}</i></p>
          </div>
        ))}
      </div>
    </div>
  );
}
