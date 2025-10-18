import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    try {
      // ✅ Backend expects JSON: { email, password }
      const res = await fetch("https://api.trinetraventures.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("Login failed:", errText);
        throw new Error("Login failed");
      }

      const data = await res.json();
      localStorage.setItem("token", data.access_token); // ✅ save JWT token
      window.location.href = "/configure"; // ✅ redirect to configuration page
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    }
  }

  return (
    
    <div className="login-container">
      <div className="login-card">
        <h2>Login to Mainto</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
