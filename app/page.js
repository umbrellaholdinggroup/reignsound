/* eslint-disable react/no-unescaped-entities */

import "../public/styles/style.css";
import Image from "next/image";
import fs from "fs";
import path from "path";
import getExistingLogos from "@/lib/getExistingLogos";

export const metadata = {
  title: "Reignsound",
  description:
    "Reignsound™ is a global, public-facing administrative and holding company.",
};

// --- Subsidiary List Setup ---

// Your real subsidiaries
const subsidiariesList = [
  { name: "A1 Music Group", trademark: "unregistered" },
  { name: "AD-1", trademark: "unregistered" },
  { name: "ADMIN-1", trademark: "unregistered" },
  { name: "Apparel by Reignsound", trademark: "unregistered" },
  { name: "ATAAH KING", trademark: "unregistered" },
  { name: "ATAAH KING News", trademark: "unregistered" },
  { name: "BIG PICTURE", trademark: "unregistered" },
  { name: "BRAND-1", trademark: "unregistered" },
  { name: "CHANNEL-1", trademark: "unregistered" },
  { name: "COMPANY-1", trademark: "unregistered" },
  { name: "FAVORITE RAPPER inc.", trademark: "unregistered" },
  { name: "FIRM Capital & Marketing", trademark: "unregistered" },
  { name: "Mainstream Label Network", trademark: "unregistered" },
  { name: "Merch by Reignsound", trademark: "unregistered" },
  { name: "NOBRANDJUSTGOD", trademark: "unregistered" },
  { name: "Numbers LLC", trademark: "unregistered" },
  { name: "PAGE-1", trademark: "unregistered" },
  { name: "PARTNER-1", trademark: "unregistered" },
  { name: "PRESS-1", trademark: "unregistered" },
  { name: "Public Production Company", trademark: "unregistered" },
  { name: "Reignsound Ads", trademark: "unregistered" },
  { name: "Reignsound Analytics", trademark: "unregistered" },
  { name: "Reignsound Board", trademark: "unregistered" },
  { name: "Reignsound Commercial", trademark: "unregistered" },
  { name: "Reignsound Finance", trademark: "unregistered" },
  { name: "Reignsound Global", trademark: "unregistered" },
  { name: "Reignsound Holdings", trademark: "unregistered" },
  { name: "Reignsound Innovations", trademark: "unregistered" },
  { name: "Reignsound Media", trademark: "unregistered" },
  { name: "Reignsound News", trademark: "unregistered" },
  { name: "Reignsound Philanthropies", trademark: "unregistered" },
  { name: "Reignsound Press", trademark: "unregistered" },
  { name: "Reignsound Presents", trademark: "unregistered" },
  { name: "Reignsound Productions", trademark: "unregistered" },
  { name: "Reignsound Publishing", trademark: "unregistered" },
  { name: "Reignsound Records", trademark: "unregistered" },
  { name: "Reignsound Recreational Center", trademark: "unregistered" },
  { name: "Reignsound Studios", trademark: "unregistered" },
  { name: "Reignsound Tech", trademark: "unregistered" },
  { name: "Reignsound Ventures", trademark: "unregistered" },
  { name: "ReignsoundXL", trademark: "unregistered" },
  { name: "Reignsound Affiliates", trademark: "unregistered" },
  { name: "Reignsound Headquarters", trademark: "unregistered" },
  { name: "Sound and Friends (Series)", trademark: "unregistered" },
  { name: "Soundwork (Series) by Reignsound", trademark: "unregistered" },
  { name: "SQUARE-1", trademark: "unregistered" },
  { name: "STATION-1", trademark: "unregistered" },
  { name: "STORE-1", trademark: "unregistered" },
  { name: "STUDIO-1", trademark: "unregistered" },
  { name: "TEAM-1", trademark: "unregistered" },
  { name: "The FIRM Group", trademark: "unregistered" },
  { name: "Top Notch Records", trademark: "unregistered" },
  { name: "Trap Handbook", trademark: "unregistered" },
  { name: "UMBRELLA Holding Group Company", trademark: "unregistered" },
  { name: "Universal Broadcasting Network", trademark: "unregistered" },
  { name: "VENTURE-1", trademark: "unregistered" }
];

// Return an alphabetized list of subsidiaries, padded to 40 placeholders if needed
function getSubsidiaryList(list) {
  // Sort by name
  const sorted = [...list].sort((a, b) => a.name.localeCompare(b.name));

  const total = Math.max(sorted.length, 40); // dynamically supports >40
  const padded = [...sorted];

  // Fill remaining slots with placeholder objects
  for (let i = sorted.length; i < total; i++) {
    padded.push({ name: `Company ${i + 1}`, trademark: "unregistered" });
  }

  return padded;
}

export default function Page() {
  return (
    <main className="legal-container">
      <head>
        <title>Reignsound</title>
        <meta
          name="description"
          content="Reignsound™ is a global, public-facing administrative and holding company."
        />
        <meta name="author" content="Reignsound™" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Reignsound" />
        <meta
          property="og:description"
          content="Reignsound™ is a global, public-facing administrative and holding company."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reignsound.vercel.app" />
      </head>

      <h1 className="brand-name">Reignsound<sup style={{ fontFamily: "IBM Plex Sans Condensed" }}>&trade;</sup></h1>

      <p className="brand-description">
        Reignsound&trade; is a global, public-facing administrative and holding company<sup>1</sup> organized in the United States of America ("U.S.A.").
      </p>

      <p className="document-description">
        This web document serves as the official Master Agreement ("Agreement") between Reignsound&trade; ("Company") and all users accessing or interacting with the platforms, products, and/or services of the Company's subsidiaries &mdash; collectively, the Company's "Goods and Services," each, a "Good" or "Service".
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
        The "Agreement Authority" defines the scope and intent of agreements — each Reignsound&trade; Good or Service is governed by its own sub-agreement, which falls under the umbrella of this Master Agreement.
      </p>

      <div className="list">
        <h5 className="sub-sub-subsection-title">Agreement Authority List</h5>
        <p className="sub-subsection-description">
          The "Agreement Authority List" recognizes authorities responsible for creating, approving, and enforcing agreements.
        </p>

        <h6 className="sub-sub-sub-subsection-title">Internal Authorities</h6>
        <p className="sub-sub-subsection-description">
          Internal authorities consist of Reignsound&trade; and its subsidiaries.
        </p>

        <ol style={{ paddingLeft: "2em" }}>
          <li>
            <span style={{ color: "#fff" }}>ATAAH KING&trade;</span><br />
            <a href="mailto:press.reignsound@gmail.com">business.ataahking@gmail.com</a><br />
            Phone: <a href="tel:+19295153507" className="phone-link">+1 929 515 3507</a><br />
          </li>

          <li>
            <span style={{ color: "#fff" }}>COMPANY-1&trade;</span><br />
            <a href="mailto:company1.reignsound@gmail.com">company1.uhgc@email.com</a><br />
            Phone: <a href="tel:+19295153507" className="phone-link">+1 929 515 3507</a><br />
            Website: <a href="https://company1.vercel.app">company1.vercel.app</a>
          </li>

          <li>
            <span style={{ color: "#fff" }}>Reignsound&trade;</span><br />
            <a href="mailto:reignsound@email.com">reignsound@email.com</a><br />
            Phone: <a href="tel:+19295153507" className="phone-link">+1 929 515 3507</a><br />
            Website: <a href="https://reignsound.vercel.app">reignsound.vercel.app</a>
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
        1. This document governs all Reignsound&trade; business activities and ensures that all parties involved in said activities understand their rights and responsibilities when accessing, producing, or using Reignsound&trade; Goods or Services.
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
          <p>
            <strong>1. OWNERSHIP RIGHTS:</strong><br />
            All Goods or Services provided by Reignsound&trade; are produced and owned solely by Reignsound&trade;, or in collaboration with partners under proper agreements, rights, and licenses where applicable.
          </p>
        </div><br />
        

        <div>
          <p>
            <strong>2. LEGAL:</strong><br />
            Reignsound&trade; takes precautionary steps<sup>2</sup> to ensure Goods and Services are in compliance with global regulations.
          </p>
          <div className="sub-sub-subsection-description">
            For any discrepancies or legal inquiries regarding Reignsound&trade; or any Reignsound&trade; subsidiaries, contact:<br />
            <a href="mailto:legal.uhgc@gmail.com" className="standalone-e-mail">legal.uhgc@gmail.com</a><br />
          </div>
        </div><br />

        <div>
          <p>
            <strong>3. FEEDBACK:</strong><br />
            Reignsound&trade; values your input &mdash; let us know what you think &mdash; it helps us improve our Goods and Services.
          </p>
          <div className="sub-sub-subsection-description">
            Send feedback to:<br />
            <a href="mailto:feedback.uhgc@gmail.com" className="standalone-e-mail">feedback.uhgc@gmail.com</a>
          </div>
        </div><br />

        <div>
          <p>
          <strong>4. TRADEMARKS:</strong><br />
          Reignsound&trade; respects all intellectual property laws: all trademarks and copyrights remain property of their respective owners.
          </p>
        </div>
      </div>

      {/* Reignsound™ asSeenOn Section */}
      <h2 style={{ fontFamily: "var(--font-sans)", textAlign: "center" }}>AS SEEN ON:</h2>

      {(() => {
        const asSeenOn = getExistingLogos("asSeenOn", 40);
        if (asSeenOn.length === 0) return null;

        const rows = [0, 1, 2];
        return (
          <div className="asSeenOn-carousel">
            {rows.map((rowIndex) => {
              const offset = Math.floor((rowIndex * asSeenOn.length) / 3);
              const rowLogos = [
                ...asSeenOn.slice(offset),
                ...asSeenOn.slice(0, offset),
              ];
              const duplicated = [...rowLogos, ...rowLogos];

              return (
                <div key={rowIndex} className={`scroll-row scroll-row-${rowIndex + 1}`}>
                  {duplicated.map((item, i) => (
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
              );
            })}
          </div>
        );
      })()}

      {/* Reignsound™ Partners Section */}
      <h2>Reignsound™ Partners</h2>
      <p className="section-description">
        Reignsound™ partners represent a diverse network of collaborators and affiliates.
      </p>

      {(() => {
        const partners = getExistingLogos("partners", 40);
        if (partners.length === 0) return null;

        const rows = [0, 1, 2];
        return (
          <div className="partner-carousel">
            {rows.map((rowIndex) => {
              const offset = Math.floor((rowIndex * partners.length) / 3);
              const rowLogos = [
                ...partners.slice(offset),
                ...partners.slice(0, offset),
              ];
              const duplicated = [...rowLogos, ...rowLogos];

              return (
                <div key={rowIndex} className={`scroll-row scroll-row-${rowIndex + 1}`}>
                  {duplicated.map((item, i) => (
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
              );
            })}
          </div>
        );
      })()}

      {/* Reignsound™ Sponsors Section */}
      <h2>Reignsound™ Sponsors</h2>
      <p className="section-description">
        Reignsound™ sponsors are organizations and entities that provide financial or resource support to Reignsound™ and its initiatives.
      </p>

      {(() => {
        const sponsors = getExistingLogos("sponsors", 40);
        if (sponsors.length === 0) return null;

        const rows = [0, 1, 2];
        return (
          <div className="sponsor-carousel">
            {rows.map((rowIndex) => {
              const offset = Math.floor((rowIndex * sponsors.length) / 3);
              const rowLogos = [
                ...sponsors.slice(offset),
                ...sponsors.slice(0, offset),
              ];
              const duplicated = [...rowLogos, ...rowLogos];

              return (
                <div key={rowIndex} className={`scroll-row scroll-row-${rowIndex + 1}`}>
                  {duplicated.map((item, i) => (
                    <a key={i} href={item.url} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={item.logo}
                        alt={`Sponsor ${i + 1}`}
                        width={150}
                        height={150}
                        style={{ objectFit: "contain" }}
                      />
                    </a>
                  ))}
                </div>
              );
            })}
          </div>
        );
      })()}

      {/* Reignsound™ Subsidiaries Section */}
      <h2>Reignsound™ Subsidiaries</h2>
      <p className="section-description">
        Reignsound™ subsidiaries represent our extended family of brands — operating across creative, administrative, and strategic sectors worldwide.
      </p>

      {(() => {
        const subsidiaries = getExistingLogos("subsidiaries", 40);
        if (subsidiaries.length === 0) return null;

        const rows = [0, 1, 2];
        return (
          <div className="subsidiary-carousel">
            {rows.map((rowIndex) => {
              const offset = Math.floor((rowIndex * subsidiaries.length) / 3);
              const rowLogos = [
                ...subsidiaries.slice(offset),
                ...subsidiaries.slice(0, offset),
              ];
              const duplicated = [...rowLogos, ...rowLogos];

              return (
                <div key={rowIndex} className={`scroll-row scroll-row-${rowIndex + 1}`}>
                  {duplicated.map((item, i) => (
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
              );
            })}
          </div>
        );
      })()}

      <hr style={{ borderTop: '5px dashed #1c1c1c', margin: '20px 0' }} />

      {/* Reignsound™ Subsidiary Directory */}
      <section className="subsidiary-directory">
        <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>
          Reignsound&trade; Subsidiary Directory
        </h2>

        <div className="subsidiary-grid">
          {getSubsidiaryList(subsidiariesList)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((subsidiary, i) => (
              <div key={i}>
                <span className="brand-name">{subsidiary.name}</span>
                {subsidiary.trademark === "unregistered" && (
                  <span className="trademark-symbol" aria-hidden="true">&trade;</span>
                )}
                {subsidiary.trademark === "registered" && (
                  <span className="trademark-symbol" aria-hidden="true">&reg;</span>
                )}
              </div>
            ))}
        </div>

      </section>




      <hr style={{ borderTop: '5px dashed #1c1c1c', margin: '20px 0' }} />

      <p style={{ fontSize: '10px' }}>
        1. Reignsound&trade; (the "Company") is a holding company &mdash; a type of business entity that owns or manages other companies, rather than producing goods or services itself.
      </p>

      <p style={{ fontSize: '10px' }}>
        2. To ensure the Goods and Services of the Company's subsidiary brands comply with global regulations, the Company regularly reviews and updates its practices in accordance with changes in laws and industry standards.
      </p>

      <hr style={{ borderTop: '5px dashed #1c1c1c' }} />

      <footer>© Reignsound&trade;</footer>
    </main>
  );
}