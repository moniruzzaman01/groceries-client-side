import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div className="brand-container">
          <div className="brand toggle">
            <h2>Groceries</h2>
            <small>Your daily needs</small>
          </div>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/home">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/my-item">My Items</Link>
            </li>
            <li class="nav-item">
              <Link to="/login">Login</Link>
            </li>
            <li class="nav-item">
              <Link to="/add-item">Add Item</Link>
            </li>
            <li class="nav-item">
              <Link to="/manage-item">Manage Item</Link>
            </li>
            <li class="nav-item">
              <Link to="/logout">LogOut</Link>
            </li>
            <li class="nav-item">
              <Link to="/sign-up">SignUp</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
