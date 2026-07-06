import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CitizenLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    const users = JSON.parse(localStorage.getItem("citizens")) || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      alert("Invalid citizen email or password");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    navigate("/home");
  }

  return (
    <div style={container}>
      <div style={card}>
        <h1 style={title}>Citizen Login</h1>

        <input
          type="email"
          placeholder="Citizen email"
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
          New citizen? <Link to="/signup">Register</Link>
        </p>

        <Link to="/">Back to Main Page</Link>
      </div>
    </div>
  );
}

const container = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#F8FAFC",
};

const card = {
  width: "400px",
  padding: "30px",
  background: "white",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

const title = { color: "#2563EB" };

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
  background: "#2563EB",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default CitizenLogin;