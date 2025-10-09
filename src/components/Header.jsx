// src/components/Header.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  // ✅ Properly defined logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear JWT
    navigate("/login");               // Redirect to login page
  };

  return (
    <header
      style={{
        backgroundColor: "#0D9488", // main teal
        color: "#FFFFFF",
        padding: "1rem 2rem",
        fontSize: "1.5rem",
        fontWeight: "bold",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>Mainto</div>

      <div className="header-right" style={{ display: "flex", alignItems: "center" }}>
        <button
          onClick={handleLogout}
          className="logout-btn"
          style={{
            backgroundColor: "#EF5350",
            color: "#fff",
            border: "none",
            padding: "8px 18px",
            borderRadius: "6px",
            fontSize: "0.95rem",
            fontWeight: "500",
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#D32F2F")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#EF5350")}
        >
          Logout
        </button>
      </div>
    </header>
  );
}
