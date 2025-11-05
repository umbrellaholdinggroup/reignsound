/* eslint-disable react/no-unescaped-entities */

import "../public/styles/style.css";
import Image from "next/image";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Reignsound",
  description:
    "Reignsound™ is a global, public-facing administrative and holding company.",
};

// --- Subsidiary List Setup ---

// Your real subsidiaries
const subsidiariesList = [
  "ATAAH KING",
  "Reignsound Studios",
  "Reignsound Media",
  "Apparel by Reignsound",
  "Reignsound Presents",
  "Reignsound Global",
  "COMPANY-1",
  "FAVORITE RAPPER inc.",
  "Reignsound Records",
  "UMBRELLA Holding Group Company",
  "ReignsoundXL",
  "AD-1",
  "BRAND-1",
  "CHANNEL-1",
  "PAGE-1",
  "TEAM-1",
  "PARTNER-1",
  "SOURCE-1",
  "VENTURE-1",
  "STATION-1",
  "STORE-1",
  "STUDIO-1",
  "Reignsound Affiliates",
  "Mainstream Label Network",
  "Reignsound Holdings",
  "Reignsound Analytics",
  "Reignsound Board",
  "Public Production Company",
  "Universal Broadcasting Network",
  "PRESS-1",
  "A1 Music Group",
  "ADMIN-1",
  "Sound and Friends (Series)",
  "Top Notch Records",
  "Reignsound Finance",
  "Reignsound Innovations",
  "Reignsound Ventures",
  "Reignsound News",
  "ATAAH KING News",
  "Reignsound Philanthropies",
  "Reignsound Ads",
  "Merch by Reignsound",
  "Reignsound Commercial",
  "Reignsound Press",
  "Reignsound Productions",
  "Reignsound Publishing",
  "Reignsound Recreational Center",
  "Reignsound Gear",
  "Reignsound Tech",
  "Soundwork (Series) by Reignsound",
  "SQUARE-1",
  "Reignsound Headquarters",
  "BIG PICTURE",
  "Trap Handbook",
  "Numbers LLC",
  "NOBRANDJUSTGOD",
  "The FIRM Group",
  "FIRM Capital & Marketing"
];

// Return an alphabetized list of subsidiaries, padded to 40 placeholders if needed
function getSubsidiaryList(list) {
  const sorted = [...list].sort((a, b) => a.localeCompare(b));
  const total = Math.max(sorted.length, 40); // dynamically supports >40
  const padded = [...sorted];

  for (let i = sorted.length + 1; i <= total; i++) {
    padded.push(`Company ${i}`);
  }

  return padded;
}

// Helper: only include logos that actually exist in /public/[dir]
function getExistingLogos(dir, total) {
  const logos = [];
  for (let i = 1; i <= total; i++) {
    const filePath = path.join(process.cwd(), "public", dir, `logo-${i}.png`);
    if (fs.existsSync(filePath)) {
      logos.push({
        logo: `/${dir}/logo-${i}.png`,
        url: "#",
      });
    }
  }
  return logos;
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
        This web document serves as the official digital agreement ("Agreement") between Reignsound&trade; ("Company") and all users accessing or interacting with the platforms, products, and/or services of the Company's subsidiaries &mdash; collectively, the Company's "Goods and Services," each, a "Good" or "Service" &mdash; including this website (https://reignsound.vercel.app).
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
    Reignsound
    <sup style={{ fontFamily: "IBM Plex Sans Condensed" }}>&trade;</sup> Subsidiary Directory
  </h2>

  {(() => {
    const subsidiaries = getSubsidiaryList(subsidiariesList).sort((a, b) =>
      a.localeCompare(b)
    );
    const total = subsidiaries.length;
    const remainder = total % 3;
    const needsCentering = remainder === 1; // only one in last row

    return (
      <div className="subsidiary-grid">
        {subsidiaries.map((name, i) => {
          const isLast = i === total - 1;
          const isSingleInLastRow = needsCentering && isLast;

          return (
            <div
              key={i}
              style={{
                gridColumn: isSingleInLastRow ? "2 / span 1" : "auto",
              }}
            >
              {name}
            </div>
          );
        })}
      </div>
    );
  })()}
</section>



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