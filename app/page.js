/* eslint-disable react/no-unescaped-entities */

import "../public/styles/style.css";
import Image from "next/image";

export const metadata = {
  title: "Reignsound™: Administrative & Holding Company - Operate Worldwide",
  description:
    "Reignsound™ is a New York-based administrative and holding company operating globally. Discover our services, subsidiaries, and official filings.",
};

export default function Page() {
  return (
    <main className="legal-container">
      <head>
        <title>Reignsound™: Administrative & Holding Company - Operate Worldwide</title>
        <meta
          name="description"
          content="Reignsound™ is a New York-based administrative and holding company operating globally. Discover our services, subsidiaries, and official filings."
        />
        <meta name="author" content="Reignsound™" />

        {/* Open Graph for social sharing */}
        <meta
          property="og:title"
          content="Reignsound™: Administrative & Holding Company - Operate Worldwide"
        />
        <meta
          property="og:description"
          content="Reignsound™ is a New York-based administrative and holding company operating globally. Discover our services, subsidiaries, and official filings."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reignsound.vercel.app" />
      </head>

      <h1 className="brand-name">Reignsound&trade;</h1>

      <p className="brand-description">
        Reignsound&trade; is a global, public-facing administrative and holding company<sup>1</sup> organized under New York ("N.Y.") law in the United States of America ("U.S.A.").
      </p>

      <p className="document-description">
        This document is the official digital agreement ("Agreement") between Reignsound&trade; ("Company") and all users accessing or interacting with the platforms, products, and/or services of the Company's subsidiaries &mdash; collectively, the Company's "Goods and Services," each, a "Good" or "Service" &mdash; including this website (https://reignsound.vercel.app).
      </p>

      <h2 className="section-title">Terms and Conditions (T&amp;C)</h2>
      <p className="section-description">
        The "Terms and Conditions" establish the legal and ethical framework governing all interactions with, access to, and use of Reignsound&trade; Goods and Services.
      </p>

      <h3 className="subsection-title">Agreement Framework</h3>
      <div className="subsection-description">
        <p>
          The "Agreement Framework" establishes the framework of all agreements within Reignsound&trade; ― including the authority and purpose by which they're made.
        </p>
      </div>

      <h4 className="sub-subsection-title">Agreement Authority</h4>
      <p className="subsection-description">
        The "Agreement Authority" defines the scope and intent of the Agreement — each Reignsound&trade; Good or Service is governed by its own sub-agreement, which falls under the umbrella of this master Agreement.
      </p>

      <div className="list">
        <h5 className="sub-sub-subsection-title">Agreement Authority List</h5>
        <p className="sub-subsection-description">
          The "Agreement Authority List" recognizes authorities responsible for creating, approving, and enforcing Agreements.
        </p>

        <h6 className="sub-sub-sub-subsection-title">Internal Authorities</h6>
        <p className="sub-sub-subsection-description">
          Internal authorities consist of Reignsound&trade; and its subsidiaries.
        </p>

        <ol style={{ paddingLeft: "2em" }}>
          <li>
            <span style={{ color: "#fff" }}>Reignsound&trade;</span><br />
            <a href="mailto:reignsound@email.com">reignsound@email.com</a><br />
            Phone: <a href="tel:+19295153507" className="phone-link">+1 929 515 3507</a><br />
            Website: <a href="https://reignsound.vercel.app">reignsound.vercel.app</a>
          </li>

          <li>
            <span style={{ color: "#fff" }}>COMPANY-1&trade;</span><br />
            <a href="mailto:company1.reignsound@gmail.com">company1.reignsound@email.com</a><br />
            Phone: <a href="tel:+19295153507" className="phone-link">+1 929 515 3507</a><br />
            Website: <a href="https://company1.vercel.app">company1.vercel.app</a>
          </li>

          <li>
            <span style={{ color: "#fff" }}>Reignsound Global&trade;</span><br />
            <a href="mailto:press.reignsound@gmail.com">press.reignsound@gmail.com</a><br />
            Phone: <a href="tel:+19295153507" className="phone-link">+1 929 515 3507</a><br />
          </li>

          <li>
            <span style={{ color: "#fff" }}>Reignsound Presents&trade;</span><br />
            <a href="mailto:press.reignsound@gmail.com">press.reignsound@gmail.com</a><br />
            Phone: <a href="tel:+19295153507" className="phone-link">+1 929 515 3507</a><br />
          </li>
        </ol>

        <h6 className="sub-sub-sub-subsection-title">Federal Authorities</h6>
        <p className="sub-sub-subsection-description">
          Federal Authorities oversee compliance with national laws and regulations affecting business operations, consumer protection, data privacy, and intellectual property.
        </p>

        <ol style={{ paddingLeft: "2em" }}>
          <li>
            <span style={{ color: "#fff" }}>Consumer Financial Protection Bureau (C.F.P.B.)</span><br />
            <a href="mailto:cfpb-hr@cfpb.gov">cfpb-hr@cfpb.gov</a><br />
            Phone: <a href="tel:+18554112372" className="phone-link">+1 855 411 2372</a><br />
            Website: <a href="https://www.consumerfinance.gov/about-us/contact-us/">consumerfinance.gov</a>
          </li>
          <li>
            <span style={{ color: "#fff" }}>Department of Commerce (D.O.C.)</span><br />
            Phone: <a href="tel:+12024822000" className="phone-link">+1 202 482 2000</a><br />
            Website: <a href="https://learn.commerce.gov/contact-us.html">learn.commerce.gov</a>
          </li>
          <li>
            <span style={{ color: "#fff" }}>Federal Communications Commission (F.C.C.)</span><br />
            Phone: <a href="tel:+18882255322" className="phone-link">+1 888 225 5322</a><br />
            Website: <a href="https://www.fcc.gov/about/contact">fcc.gov</a>
          </li>
          <li>
            Federal Trade Commission (F.T.C.)<br />
            Phone: <a href="tel:+12023262222" className="phone-link">+1 202 326 2222</a><br />
            Website: <a href="https://www.ftc.gov/about-ftc/contact">ftc.gov</a>
          </li>
          <li>
            <span style={{ color: "#fff" }}>United States Copyright Office</span><br />
            Phone: <a href="tel:+12027073000" className="phone-link">+1 202 707 3000</a><br />
            Website: <a href="https://www.copyright.gov/help/">copyright.gov</a>
          </li>
          <li>
            <span style={{ color: "#fff" }}>United States Patent &amp; Trademark Office (U.S.P.T.O.)</span><br />
            Phone: <a href="tel:+15712721000" className="phone-link">+1 571 272 1000</a><br />
            Website: <a href="https://www.uspto.gov/about-us/contact-us">uspto.gov</a>
          </li>
        </ol>

        <h6 className="sub-sub-sub-subsection-title">State Authorities</h6>
        <p className="sub-sub-subsection-description">
          New York State ("N.Y.S.") Authorities ensure compliance with state-specific regulations and laws that impact business operations, consumer rights, and data protection within New York.
        </p>

        <ol style={{ paddingLeft: "2em" }}>
          <li>
            <span style={{ color: "#fff" }}>Consumer Protection Division — N.Y.S. Attorney General</span><br />
            <a href="mailto:consumer@ag.ny.gov">consumer@ag.ny.gov</a><br />
            Phone: <a href="tel:18007717755">+1 800 771 7755</a><br />
            Website: <a href="https://ag.ny.gov/consumer" target="_blank">ag.ny.gov</a>
          </li>
          <li>
            <span style={{ color: "#fff" }}>New York State Department of State (N.Y.S.D.O.S.)</span><br />
            <a href="mailto:consumer@dos.ny.gov">consumer@dos.ny.gov</a><br />
            Phone: <a href="tel:18006971220">+1 800 697 1220</a><br />
            Website: <a href="https://dos.ny.gov/consumer-protection" target="_blank">dos.ny.gov</a>
          </li>
        </ol>
      </div>

      <h4>Agreement Purpose</h4>
      <p className="subsection-description">
        The "Agreement Purpose" clarifies: (1) why the agreement exists and (2) what it seeks to achieve.
      </p>
      <p>
        1. This document governs all Reignsound&trade; business activities and ensures that all parties involved in said activities understand their rights and responsibilities when accessing or using Reignsound&trade; Goods or Services.
      </p>
      <p>
        2. This Agreement aims to protect both the Company and its users by establishing clear guidelines for acceptable behavior, data privacy, intellectual property rights, and dispute resolution.
      </p>

      <h3>Company Responsibilities</h3>
      <p className="subsection-description">
        The "Company Responsibilities" section of the Agreement outlines what’s expected of the Company in terms of service delivery, data protection, and compliance with applicable laws and regulations.
      </p>

      <h3>User Responsibilities</h3>
      <p className="subsection-description">
        The "User Responsibilities" section of the Agreement outlines what’s expected of users in terms of conduct, compliance, and lawful use of Reignsound&trade; resources.
      </p>

      <h2>Disclaimers &amp; Protections (D&P)</h2>
      <div className="disclaimer-list" style={{ color: "#ccc" }}>
        <div>
          <strong>1. OWNERSHIP RIGHTS:</strong><br />
          All Goods or Services provided by Reignsound&trade; are produced and owned solely by Reignsound&trade;, or in collaboration with partners under proper agreements, rights, and licenses where applicable.
        </div><br />

        <div>
          <strong>2. LEGAL:</strong><br />
          Reignsound&trade; takes precautionary steps<sup>2</sup> to ensure Goods and Services are in compliance with global regulations.
          <div className="sub-sub-subsection-description">
            For any discrepancies or legal inquiries regarding Reignsound&trade; or any Reignsound&trade; subsidiaries, contact:<br />
            <a href="mailto:legal.uhgc@gmail.com" className="standalone-e-mail">legal.uhgc@gmail.com</a><br />
          </div>
        </div><br />

        <div>
          <strong>3. FEEDBACK:</strong><br />
          Reignsound&trade; values your input &mdash; let us know what you think &mdash; it helps us improve our Goods and Services.
          <div className="sub-sub-subsection-description">
            Send feedback to:<br />
            <a href="mailto:feedback.uhgc@gmail.com" className="standalone-e-mail">feedback.uhgc@gmail.com</a>
          </div>
        </div><br />

        <div>
          <strong>4. TRADEMARKS:</strong><br />
          Reignsound&trade; respects all intellectual property laws: all trademarks and copyrights remain property of their respective owners.
        </div>
      </div>

      {/* Reignsound™ Partners Section */}
      <h2>Reignsound™ Partners</h2>
      <p className="section-description">
        Reignsound™ partners represent a diverse network of collaborators and affiliates.
      </p>

      {(() => {
        const partners = [
          { logo: "/partners/logo-1.png", url: "https://partner1.com" },
          { logo: "/partners/logo-2.png", url: "https://partner2.com" },
          { logo: "/partners/logo-3.png", url: "https://partner3.com" },
          { logo: "/partners/logo-4.png", url: "https://partner4.com" },
          { logo: "/partners/logo-5.png", url: "https://partner5.com" },
          { logo: "/partners/logo-6.png", url: "https://partner6.com" },
        ];

        const rows = ["scroll-row-1", "scroll-row-2", "scroll-row-3"];

        return (
          <div className="partner-carousel">
            {rows.map((rowClass, rowIndex) => (
              <div key={rowIndex} className={`scroll-row ${rowClass}`}>
                {partners.map((item, i) => (
                  <a key={i} href={item.url} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={item.logo}
                      alt={`Partner ${i + 1}`}
                      width={150}
                      height={150}
                      style={{ objectFit: "contain" }}
                    />
                  </a>
                ))}
              </div>
            ))}
          </div>
        );
      })()}

      {/* Reignsound™ Subsidiaries Section */}
      <h2>Reignsound™ Subsidiaries</h2>
      <p className="section-description">
        Reignsound™ subsidiaries represent our extended family of brands &mdash; operating across creative, administrative, and strategic sectors worldwide.
      </p>

      {(() => {
        const subsidiaries = [
          { logo: "/subsidiaries/logo-1.png", url: "https://youtube.com/@reignsoundglobal" },
          { logo: "/subsidiaries/logo-2.png", url: "https://reignsound.github.io" },
          { logo: "/subsidiaries/logo-3.png", url: "https://brand3.com" },
          { logo: "/subsidiaries/logo-4.png", url: "https://brand4.com" },
          { logo: "/subsidiaries/logo-5.png", url: "https://brand5.com" },
          { logo: "/subsidiaries/logo-6.png", url: "https://brand6.com" },
        ];

        const rows = ["scroll-row-1", "scroll-row-2", "scroll-row-3"];

        return (
          <div className="subsidiary-carousel">
            {rows.map((rowClass, rowIndex) => (
              <div key={rowIndex} className={`scroll-row ${rowClass}`}>
                {subsidiaries.map((item, i) => (
                  <a key={i} href={item.url} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={item.logo}
                      alt={`Subsidiary ${i + 1}`}
                      width={150}
                      height={150}
                      style={{ objectFit: "contain" }}
                    />
                  </a>
                ))}
              </div>
            ))}
          </div>
        );
      })()}

      <hr style={{ borderTop: '5px dashed #1c1c1c', margin: '20px 0' }} />

      <p style={{ fontSize: '10px' }}>
        1. Reignsound&trade; is a holding company &mdash; a type of business entity that owns or manages other companies, rather than producing goods or services itself.
      </p>

      <p style={{ fontSize: '10px' }}>
        2. To ensure the Goods and Services of the Company's subsidiary brands comply with global regulations, the Company regularly reviews and updates its practices in accordance with changes in laws and industry standards.
      </p>

      <hr style={{ borderTop: '5px dashed #1c1c1c' }} />

      <footer>© Reignsound&trade;</footer>
    </main>
  );
}