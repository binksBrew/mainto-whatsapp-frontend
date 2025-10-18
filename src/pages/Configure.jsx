import { useState, useEffect } from "react";

export default function Configure() {
  const [sheetUrl, setSheetUrl] = useState("");
  const [penalty, setPenalty] = useState("");
  const [reminder1, setReminder1] = useState("");
  const [reminder2, setReminder2] = useState("");
  const [phone, setPhone] = useState("");
  const [managerPhone, setManagerPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
      return;
    }

    async function fetchConfig() {
      try {
        const res = await fetch("https://api.trinetraventures.com/user/config", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          setSheetUrl(data.sheet_url || "");
          setPenalty(data.penalty_amount || "");
          setReminder1(data.reminder_time_1 || "");
          setReminder2(data.reminder_time_2 || "");
          setPhone(data.phone_number || "");
          setManagerPhone(data.manager_phone || ""); //prefill
        }
      } catch (err) {
        console.error("Failed to fetch config:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchConfig();
  }, []);

  async function handleSave(e) {
    e.preventDefault();
    setMessage("");

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setMessage("⚠️ You are not logged in.");
        return;
      }

      const payload = {
        sheet_url: sheetUrl,
        penalty_amount: parseFloat(penalty),
        reminder_time_1: reminder1,
        reminder_time_2: reminder2 || null,
        phone_number: phone,
        manager_phone: managerPhone,
      };

      const res = await fetch("https://api.trinetraventures.com/configure-landlord", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Settings updated successfully!");
      } else {
        setMessage(`⚠️ Error: ${data.detail || data.message}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("⚠️ Failed to save settings. Please try again.");
    }
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div className="configure-container">
      <div className="configure-card">
        <h2>Configure Your Mainto Settings</h2>
        {message && <p className="status">{message}</p>}

        <form onSubmit={handleSave}>
          <label>Google Sheet URL</label>
          <input
            type="url"
            placeholder="https://docs.google.com/spreadsheets/..."
            value={sheetUrl}
            onChange={(e) => setSheetUrl(e.target.value)}
            required
          />

          <label>Daily Penalty (₹)</label>
          <input
            type="number"
            min="0"
            placeholder="50"
            value={penalty}
            onChange={(e) => setPenalty(e.target.value)}
            required
          />

          <label>Reminder Time 1</label>
          <input
            type="time"
            value={reminder1}
            onChange={(e) => setReminder1(e.target.value)}
            required
          />

          <label>Reminder Time 2 (optional)</label>
          <input
            type="time"
            value={reminder2}
            onChange={(e) => setReminder2(e.target.value)}
          />

          <label>Your Contact Number</label>
          <input
            type="tel"
            placeholder="9998887777"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <label>Manager’s Contact Number</label>
          <input
            type="tel"
            placeholder="9997776666"
            value={managerPhone}
            onChange={(e) => setManagerPhone(e.target.value)}
            required
          />

          <button type="submit">Save Settings</button>
        </form>
      </div>
    </div>
  );
}
