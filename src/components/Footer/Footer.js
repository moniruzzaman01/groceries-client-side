import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer-container">
      <div className="copyright-container">
        <div style={{ width: "130px" }} className="middle mx-auto">
          <h2>Groceries</h2>
          <small>Your daily needs</small>
        </div>
        <p className="copyright">
          Copyright-<span className="name">Moniruzzaman</span>{" "}
          <span style={{ color: "tomato" }}>@{year}</span>
        </p>
      </div>
      <div className="location mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cum
        maxime tenetur suscipit vitae a! Exercitationem unde asperiores vitae,
        ad provident ea perferendis explicabo velit laboriosam nam quis cum?
        Totam.
      </div>
      <div className="social-icons mx-auto">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          quasi voluptatum quaerat atque ipsam nesciunt pariatur consectetur
          quia amet animi, laborum quo modi. Nesciunt in, officia optio ipsam
          culpa laborum!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
