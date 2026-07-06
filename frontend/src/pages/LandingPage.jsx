import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div style={container}>
      <div style={card}>
        <h1 style={title}>Gram Connect</h1>
        <h2>Village Complaint Management System</h2>
        <p style={text}>Report village problems and track complaint status.</p>

        <Link to="/citizen-login">
          <button style={button}>👤 Citizen Login</button>
        </Link>

        <Link to="/signup">
          <button style={button}>📝 Citizen Registration</button>
        </Link>

        <Link to="/admin-login">
          <button style={adminButton}>👨‍💼 Admin Login</button>
        </Link>
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
  width: "450px",
  padding: "40px",
  background: "white",
  borderRadius: "15px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

const title = {
  color: "#6C63FF",
  fontSize: "50px",
};

const text = {
  color: "#555",
  marginBottom: "25px",
};

const button = {
  width: "100%",
  padding: "14px",
  margin: "10px 0",
  background: "#6C63FF",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer",
};

const adminButton = {
  ...button,
  background: "#222",
};

export default LandingPage;