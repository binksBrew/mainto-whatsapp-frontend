import React, { useState } from "react";
import Configure from "../pages/Configure";
import Dashboard from "../pages/Dashboard";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("form");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <div className="flex justify-between w-full max-w-3xl p-4 bg-white shadow-md rounded-lg mt-6">
        <div className="flex gap-3">
          <button
            onClick={() => setActiveTab("form")}
            className={`px-4 py-2 rounded-md ${
              activeTab === "form"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            My Details
          </button>
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`px-4 py-2 rounded-md ${
              activeTab === "dashboard"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Dashboard
          </button>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>

      <div className="mt-8 w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        {activeTab === "form" && <Configure editable={true} />}
        {activeTab === "dashboard" && <Dashboard />}
      </div>
    </div>
  );
};

export default Tabs;
