import { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch(`${apiUrl}/users`);
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, [apiUrl]);

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.major.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.interest.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading students...</p>;

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
            <h3>{u.name}</h3>
            <p><b>Major:</b> {u.major}</p>
            <p><b>Interest:</b> {u.interest}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

