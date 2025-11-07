// components/Footer.js
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ textAlign: 'center', padding: '1rem 0', fontSize: '0.9rem', color: '#666' }}>
      &copy; {currentYear} Reignsound&trade; — All rights reserved.<br />
      Built by COMPANY-1&trade; — Powered by ReignsoundXL&trade;
    </footer>
  );
};

export default Footer;