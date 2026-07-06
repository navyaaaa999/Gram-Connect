import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <Navbar />

      <div
        style={{
          maxWidth: "600px",
          margin: "50px auto",
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#2563EB" }}>
          👤 My Profile
        </h1>

        <hr />

        <p>
          <strong>Name:</strong> {user?.name}
        </p>

        <p>
          <strong>Email:</strong> {user?.email}
        </p>

        <p>
          <strong>Role:</strong> Citizen
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;