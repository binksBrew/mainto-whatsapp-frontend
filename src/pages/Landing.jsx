import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-section">
      <div className="landing-card">
        <h1>Simplifying Rent Collection & Payment Reminders</h1>
        <p>
          Save time and get paid faster. Mainto automates rent reminders and secure payments without storing your personal or tenant data.
        </p>
        <div className="landing-buttons">
          <button
            className="primary"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="secondary"
            onClick={() => navigate ("/contact")}
          >
            Contact Us
          </button>
        </div>
      </div>
      <p style={{ marginTop: "40px", fontSize: "0.9rem", color: "#6b7280" }}>
        © 2025 Mainto — All rights reserved.
      </p>
    </div>
  );
}
