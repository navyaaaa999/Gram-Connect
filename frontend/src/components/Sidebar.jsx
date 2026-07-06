function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        padding: "20px",
        borderRight: "1px solid #ddd",
        minHeight: "80vh",
      }}
    >
      <h3>Menu</h3>

      <p>🏠 Home</p>
      <p>👤 Profile</p>
      <p>❤️ Favorites</p>
      <p>⚙️ Settings</p>
    </div>
  );
}

export default Sidebar;