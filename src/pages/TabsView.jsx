import { useState } from "react";
import Configure from "./Configure";
import Dashboard from "./Dashboard";

export default function TabsView() {
  const [activeTab, setActiveTab] = useState("details");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        <button
          className={activeTab === "details" ? "active" : ""}
          onClick={() => setActiveTab("details")}
        >
        My Details
        </button>
        <button
          className={activeTab === "dashboard" ? "active" : ""}
          onClick={() => setActiveTab("dashboard")}
        >
          Dashboard
        </button>
        
      </div>

      <div className="tabs-content">
        {activeTab === "details" && <Configure />}
        {activeTab === "dashboard" && <Dashboard />}
      </div>
    </div>
  );
}
