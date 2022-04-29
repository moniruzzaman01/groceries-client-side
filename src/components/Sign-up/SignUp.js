import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="mx-auto my-5 container signup-form-container">
      <h1>Please Register Here!!!</h1>
      <form>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputName1">Your Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            placeholder="Your Name"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <p>
          Have an account?{" "}
          <Link className="link" to="/login">
            Login
          </Link>
        </p>
        <button type="submit" className="btn form-btn">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
