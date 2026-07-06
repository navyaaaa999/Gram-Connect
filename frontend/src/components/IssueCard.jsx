function IssueCard({ title, category, location, status, description }) {
  const statusStyle = {
    Pending: "#f59e0b",
    "In Progress": "#3b82f6",
    Resolved: "#22c55e",
  };

  return (
    <div
      style={{
        width: "80%",
        margin: "20px auto",
        padding: "20px",
        background: "white",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{title}</h3>
      <p><b>Category:</b> {category}</p>
      <p><b>Location:</b> {location}</p>

      <p>
        <b>Status:</b>{" "}
        <span
          style={{
            background: statusStyle[status],
            color: "white",
            padding: "5px 12px",
            borderRadius: "20px",
            fontSize: "14px",
          }}
        >
          {status}
        </span>
      </p>

      <p>{description}</p>
    </div>
  );
}

export default IssueCard;