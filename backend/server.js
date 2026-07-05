const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let complaints = [];

let users = [
  {
    id: 1,
    name: "Admin",
    email: "admin@gmail.com",
    password: "admin123",
    role: "admin",
  },
  {
    id: 2,
    name: "Navya Eruventy",
    email: "navya@gmail.com",
    password: "123456",
    role: "citizen",
  },
];

app.get("/", (req, res) => {
  res.send("Gram Connect Backend is running");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }

  res.json({
    message: "Login successful",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
});

app.get("/complaints", (req, res) => {
  res.json(complaints);
});

app.post("/complaints", (req, res) => {
  const newComplaint = {
    id: Date.now(),
    ...req.body,
  };

  complaints.push(newComplaint);

  res.json({
    message: "Complaint added successfully",
    complaint: newComplaint,
  });
});

app.put("/complaints/:id", (req, res) => {
  const id = Number(req.params.id);
  const { status } = req.body;

  complaints = complaints.map((complaint) =>
    complaint.id === id ? { ...complaint, status } : complaint
  );

  res.json({ message: "Status updated successfully" });
});

app.delete("/complaints/:id", (req, res) => {
  const id = Number(req.params.id);

  complaints = complaints.filter((complaint) => complaint.id !== id);

  res.json({ message: "Complaint deleted successfully" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});