import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container-fluid">
        <div className="brand-container">
          <div className="brand toggle">
            <h2>Groceries</h2>
            <small>Your daily needs</small>
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <ul className="right-items">
            <li className="nav-item">
              <Link to="/my-item">My Items</Link>
            </li>
            <li className="nav-item">
              <Link to="/add-item">Add Item</Link>
            </li>
            <li className="nav-item">
              <Link to="/manage-item">Manage Item</Link>
            </li>
            <li className="nav-item">
              <Link to="/logout">LogOut</Link>
            </li>
            <li className="nav-item">
              <Link to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-up">SignUp</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
