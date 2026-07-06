import { useState } from "react";
import { addComplaint } from "../services/complaintService";

function ReportIssue({ onAddComplaint }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  async function handleSubmit() {
    if (!title || !category || !description || !location) {
      alert("Please fill all fields");
      return;
    }

    const newComplaint = {
      title,
      category,
      description,
      location,
      status: "Pending",
    };

    const response = await addComplaint(newComplaint);

    onAddComplaint(response.complaint);

    alert("Complaint submitted successfully");

    setTitle("");
    setCategory("");
    setDescription("");
    setLocation("");
  }

  return (
    <div style={cardStyle}>
      <h3>Report a Village Problem</h3>

      <input
        type="text"
        placeholder="Problem title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={inputStyle}
      >
        <option value="">Select Category</option>
        <option value="Water Problem">Water Problem</option>
        <option value="Road Damage">Road Damage</option>
        <option value="Street Light">Street Light</option>
        <option value="Garbage Issue">Garbage Issue</option>
        <option value="Electricity Issue">Electricity Issue</option>
      </select>

      <textarea
        placeholder="Describe the problem"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ ...inputStyle, height: "90px" }}
      />

      <input
        type="text"
        placeholder="Village / Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={inputStyle}
      />

      <button style={buttonStyle} onClick={handleSubmit}>
        Submit Complaint
      </button>
    </div>
  );
}

const cardStyle = {
  width: "80%",
  margin: "30px auto",
  padding: "20px",
  background: "white",
  borderRadius: "12px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
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
  padding: "12px 25px",
  background: "#6C63FF",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default ReportIssue;