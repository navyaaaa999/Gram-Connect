import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#6C63FF",
      color: "white",
      padding: "15px 40px",
    }}>
      <h2>Gram Connect</h2>

      <div>
        <Link to="/home" style={linkStyle}>Home</Link>
        <Link to="/my-complaints" style={linkStyle}>My Complaints</Link>
        <Link to="/profile" style={linkStyle}>Profile</Link>
        <Link to="/login" style={linkStyle}>Logout</Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  marginRight: "20px",
};

export default Navbar;