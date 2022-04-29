import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer-container">
      <div className="brand toggle">
        <div>
          <h2>Groceries</h2>
          <small>Your daily needs</small>
        </div>
      </div>
      <p className="copyright">
        Copyright-<span className="name">Moniruzzaman</span>{" "}
        <span style={{ color: "tomato" }}>@{year}</span>
      </p>
    </footer>
  );
};

export default Footer;
