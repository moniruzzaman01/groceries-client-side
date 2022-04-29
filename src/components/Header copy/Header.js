import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar-container">
      <div className="left">
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        {/* <input type="text" />
        <button>search</button> */}
      </div>
      <div className="middle">
        <h2>Groceries</h2>
        <small>Your daily needs</small>
      </div>
      <div className="right">
        {/* <Link to="/login">Login</Link>
        <Link to="/sign-up">SignUp</Link> */}

        <Link to="/manage-item">Manage Item</Link>
        <Link to="/add-item">Add Item</Link>
        <Link to="/my-item">My Item</Link>
      </div>
    </nav>
  );
};

export default Header;