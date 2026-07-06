import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSignup() {
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("citizens")) || [];

    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      alert("User already exists. Please login.");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      role: "citizen",
    };

    users.push(newUser);
    localStorage.setItem("citizens", JSON.stringify(users));

    alert("Registration successful! Please login.");
    navigate("/citizen-login");
  }

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={{ color: "#2563EB", fontSize: "46px" }}>
          Gram Connect
        </h1>

        <h2>Create Citizen Account</h2>

        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={inputStyle}
        />

        <button style={buttonStyle} onClick={handleSignup}>
          Sign Up
        </button>

        <p>
          Already have an account? <Link to="/citizen-login">Login</Link>
        </p>

        <Link to="/">Back to Main Page</Link>
      </div>
    </div>
  );
}

const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#F8FAFC",
};

const cardStyle = {
  width: "420px",
  background: "white",
  padding: "30px",
  borderRadius: "14px",
  boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
  textAlign: "center",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
};

const buttonStyle = {
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

export default Signup;