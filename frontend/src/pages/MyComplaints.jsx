import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IssueCard from "../components/IssueCard";
import { getComplaints } from "../services/complaintService";

function MyComplaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    loadComplaints();
  }, []);

  async function loadComplaints() {
    try {
      const data = await getComplaints();
      setComplaints(data);
    } catch (error) {
      console.log("Error loading complaints:", error);
    }
  }

  return (
    <div>
      <Navbar />

      <div style={{ minHeight: "70vh", padding: "40px" }}>
        <h1 style={{ textAlign: "center", color: "#2563EB" }}>
          My Complaints
        </h1>

        <p style={{ textAlign: "center", color: "#555" }}>
          Track the status of complaints submitted by you.
        </p>

        {complaints.length === 0 ? (
          <div style={emptyBox}>
            <h3>No complaints submitted yet.</h3>
            <p>Go to Home and report a village problem.</p>
          </div>
        ) : (
          complaints.map((complaint) => (
            <IssueCard
              key={complaint.id}
              title={complaint.title}
              category={complaint.category}
              location={complaint.location}
              status={complaint.status}
              description={complaint.description}
            />
          ))
        )}
      </div>

      <Footer />
    </div>
  );
}

const emptyBox = {
  width: "60%",
  margin: "40px auto",
  padding: "30px",
  textAlign: "center",
  background: "white",
  borderRadius: "12px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
};

export default MyComplaints;