// src/pages/TermsOfService.jsx
import React from "react";

export default function TermsOfService() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", padding: "3rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ color: "#0D9488", fontSize: "2rem", marginBottom: "1rem" }}>Terms of Service</h1>

      <p style={{ fontSize: "1rem", color: "#333", lineHeight: "1.6" }}>
        Welcome to <strong>Mainto</strong> — a digital rent management and payment reminder system
        powered by <strong>Trinetra Ventures</strong>.  
        By using Mainto, you agree to the terms outlined below. Please read them carefully.
      </p>

      <h2 style={{ color: "#0D9488", marginTop: "2rem" }}>1. Acceptance of Terms</h2>
      <p>
        By accessing or using Mainto, you confirm that you have read, understood, and agreed to these
        Terms of Service. If you do not agree, you must stop using the platform immediately.
      </p>

      <h2 style={{ color: "#0D9488", marginTop: "2rem" }}>2. Service Overview</h2>
      <p>
        Mainto provides automated rent reminders, payment tracking, and WhatsApp notifications to landlords
        and tenants. The platform integrates with third-party APIs such as Cashfree (for payments)
        and Meta’s WhatsApp Business API (for communication).
      </p>

      <h2 style={{ color: "#0D9488", marginTop: "2rem" }}>3. User Responsibilities</h2>
      <ul>
        <li>You must provide accurate and up-to-date information.</li>
        <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
        <li>You must not misuse the service for spam, fraud, or unauthorized access.</li>
      </ul>

      <h2 style={{ color: "#0D9488", marginTop: "2rem" }}>4. Data Privacy</h2>
      <p>
        Your privacy is important to us. Mainto complies with industry best practices for
        data handling. We do not sell or share your personal information with third parties,
        except as required to process payments or comply with legal obligations.
      </p>

      <h2 style={{ color: "#0D9488", marginTop: "2rem" }}>5. Payments & Transactions</h2>
      <p>
        All payments processed through Cashfree are subject to their terms and policies.
        Mainto acts as a facilitator and does not directly handle or store your payment information.
      </p>

      <h2 style={{ color: "#0D9488", marginTop: "2rem" }}>6. Limitation of Liability</h2>
      <p>
        Mainto and Trinetra Ventures are not responsible for any indirect, incidental, or
        consequential damages arising from your use of the platform. While we take every
        precaution, uninterrupted service cannot be guaranteed.
      </p>

      <h2 style={{ color: "#0D9488", marginTop: "2rem" }}>7. Changes to Terms</h2>
      <p>
        We may update these Terms periodically. Continued use of Mainto after updates
        constitutes your acceptance of the revised Terms.
      </p>

      <h2 style={{ color: "#0D9488", marginTop: "2rem" }}>8. Contact Information</h2>
      <p>
        For any questions, feedback, or complaints, please contact us at  
        <a href="mailto:support@trinetraventures.com"> support@trinetraventures.com</a>.
      </p>

      <p style={{ marginTop: "2rem", color: "#555" }}>
        Mainto is a subdomain of <strong>Trinetra Ventures</strong> and operates under its corporate policies.
      </p>
    </div>
  );
}
