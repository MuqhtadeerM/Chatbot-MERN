import { useEffect, useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");
  const [systemPrompt, setSystemPrompt] = useState("");
  const navigate = useNavigate();

  const fetchProjects = async () => {
    try {
      const res = await api.get("/projects");
      setProjects(res.data.projects);
    } catch {
      alert("Failed to load projects");
    }
  };

  const createProject = async () => {
    try {
      await api.post("/projects", { name, systemPrompt });
      setName("");
      setSystemPrompt("");
      fetchProjects();
    } catch {
      alert("Project creation failed");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>My AI Agents</h2>
        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>

      <div className="dashboard-form">
        <input
          className="dashboard-input"
          placeholder="Agent name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="dashboard-input"
          placeholder="System prompt"
          value={systemPrompt}
          onChange={(e) => setSystemPrompt(e.target.value)}
        />
        <button className="dashboard-button" onClick={createProject}>
          Create
        </button>
      </div>

      <ul className="dashboard-list">
        {projects.map((p) => (
          <li key={p._id} className="dashboard-item">
            {p.name}
            <button
              className="dashboard-chat-btn"
              onClick={() => navigate(`/chat/${p._id}`)}
            >
              Chat
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
