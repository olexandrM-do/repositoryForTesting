import React from "react";

const Footer = () => {
  return (
    <div className="footer-copyright blue lighten-3">
      <div className="container" style={{ textAlign: "center" }}>
        © {new Date().getFullYear()} My App
      </div>
    </div>
  );
};

export default Footer;
