// src/pages/SecurityPolicy.jsx
import React from "react";

export default function SecurityPolicy() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", padding: "3rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ color: "#0D9488", fontSize: "2rem", marginBottom: "1rem" }}>Security Policy</h1>

      <p style={{ fontSize: "1rem", color: "#333", lineHeight: "1.6" }}>
        At <strong>Mainto</strong>, we take the security and privacy of our users seriously.
        Our platform is built with multiple layers of protection to ensure that your data
        — whether it’s financial information, tenant records, or payment details — is always safeguarded.
      </p>

      <h2 style={{ color: "#0D9488", marginTop: "2rem" }}>1. Data Protection</h2>
      <p>
        All sensitive information is encrypted both in transit and at rest. 
        We use industry-standard protocols like <strong>HTTPS/TLS</strong> for secure communication
        and store data using encrypted databases hosted on <strong>AWS (Amazon Web Services)</strong>.
      </p>

      <h2 style={{ color: "#0D9488", marginTop: "2rem" }}>2. Access Control</h2>
      <p>
        Access to the Mainto system is strictly controlled using authenticated tokens.
        Internal systems and APIs are protected with multi-level access rules to ensure
        only authorized actions can be performed.
      </p>

      <h2 style={{ color: "#0D9488", marginTop: "2rem" }}>3. Payment Security</h2>
      <p>
        We integrate securely with <strong>Cashfree Payments</strong> using production-grade encryption
        and PCI DSS–compliant gateways. Mainto never stores any card or UPI details on its servers.
      </p>

      <h2 style={{ color: "#0D9488", marginTop: "2rem" }}>4. WhatsApp Messaging Integrity</h2>
      <p>
        Our communication via WhatsApp Business Cloud API is fully compliant with Meta’s policies.
        All interactions are securely routed through verified channels, ensuring message authenticity.
      </p>

      <h2 style={{ color: "#0D9488", marginTop: "2rem" }}>5. Incident Response</h2>
      <p>
        In the unlikely event of a breach or anomaly, our technical team follows a strict incident
        response process including immediate containment, investigation, and transparent disclosure
        to affected users.
      </p>

      <h2 style={{ color: "#0D9488", marginTop: "2rem" }}>6. Responsible Disclosure</h2>
      <p>
        If you discover any potential vulnerabilities or security issues, please report them
        responsibly to <a href="mailto:security@trinetraventures.com">security@trinetraventures.com</a>.
        We appreciate contributions from the security community to make Mainto safer for everyone.
      </p>

      <p style={{ marginTop: "2rem", color: "#555" }}>
        Mainto is a product by <strong>Trinetra Ventures</strong>.  
        We continuously invest in security audits and compliance checks to ensure your data remains protected.
      </p>
    </div>
  );
}
