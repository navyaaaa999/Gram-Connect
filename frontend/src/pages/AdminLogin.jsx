import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      const user = response.data.user;

      if (user.role !== "admin") {
        alert("You are not an admin");
        return;
      }

      localStorage.setItem("user", JSON.stringify(user));
      navigate("/admin");
    } catch {
      alert("Invalid admin email or password");
    }
  }

  return (
    <div style={container}>
      <div style={card}>
        <h1 style={title}>Admin Login</h1>

        <input
          type="email"
          placeholder="Admin email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={input}
        />

        <button style={button} onClick={handleLogin}>
          Login
        </button>

        <p>
          <Link to="/">Back to Main Page</Link>
        </p>
      </div>
    </div>
  );
}

const container = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f4f3ff",
};

const card = {
  width: "400px",
  padding: "30px",
  background: "white",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

const title = { color: "#222" };

const input = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
};

const button = {
  width: "100%",
  padding: "12px",
  marginTop: "15px",
  background: "#222",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default AdminLogin;