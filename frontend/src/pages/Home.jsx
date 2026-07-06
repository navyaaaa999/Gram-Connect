import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReportIssue from "../components/ReportIssue";

function Home() {
  function addComplaint(newComplaint) {
    console.log("Complaint submitted:", newComplaint);
  }

  return (
    <div>
      <Navbar />

      <div
        style={{
          minHeight: "80vh",
          padding: "30px",
        }}
      >
        <h1 style={{ textAlign: "center", marginTop: "30px", color: "#2563EB" }}>
          Welcome to Gram Connect
        </h1>

        <p style={{ textAlign: "center", color: "#555" }}>
          Report village problems and track complaint status.
        </p>

        <ReportIssue onAddComplaint={addComplaint} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;