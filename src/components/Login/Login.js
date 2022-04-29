import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="mx-auto my-5 container login-form-container">
      <h1>Please Login Here!!!</h1>
      <form>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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
          New in groceries?{" "}
          <Link className="link" to="/sign-up">
            Create an account
          </Link>
        </p>
        <button type="submit" className="btn form-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
