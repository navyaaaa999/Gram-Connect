import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import IssueCard from "../components/IssueCard";
import {
  getComplaints,
  updateComplaintStatus,
  deleteComplaint,
} from "../services/complaintService";

function AdminDashboard() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    loadComplaints();
  }, []);

  async function loadComplaints() {
    const data = await getComplaints();
    setComplaints(data);
  }

  async function handleStatusChange(id, status) {
    await updateComplaintStatus(id, status);
    loadComplaints();
  }

  async function handleDelete(id) {
    await deleteComplaint(id);
    loadComplaints();
  }

  return (
    <div>
      <Navbar />

      <div style={{ display: "flex" }}>

        <div style={{ flex: 1 }}>
          <h1 style={{ textAlign: "center", marginTop: "40px" }}>
            Admin Dashboard
          </h1>

          <p style={{ textAlign: "center" }}>
            View and manage all village complaints.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "20px", margin: "30px" }}>
            <div style={boxStyle}>Total Complaints<br /><b>{complaints.length}</b></div>
            <div style={boxStyle}>Pending<br /><b>{complaints.filter(c => c.status === "Pending").length}</b></div>
            <div style={boxStyle}>In Progress<br /><b>{complaints.filter(c => c.status === "In Progress").length}</b></div>
            <div style={boxStyle}>Resolved<br /><b>{complaints.filter(c => c.status === "Resolved").length}</b></div>
          </div>

          {complaints.map((complaint) => (
            <div key={complaint.id}>
              <IssueCard
                title={complaint.title}
                category={complaint.category}
                location={complaint.location}
                status={complaint.status}
                description={complaint.description}
              />

              <div style={{ textAlign: "center", marginBottom: "25px" }}>
                <select
                  value={complaint.status}
                  onChange={(e) =>
                    handleStatusChange(complaint.id, e.target.value)
                  }
                  style={{
                    padding: "10px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>

                <button
                  onClick={() => handleDelete(complaint.id)}
                  style={{
                    marginLeft: "15px",
                    padding: "10px 18px",
                    backgroundColor: "#e53935",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Delete Complaint
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const boxStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  width: "150px",
  textAlign: "center",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
};

export default AdminDashboard;