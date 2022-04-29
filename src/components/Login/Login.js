import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Social-login/SocialLogin";
import "./Login.css";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Spineer from "../Spineer/Spineer";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.pass.value;

    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="login-form-container">
      <h1>Please Login Here!!!</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
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
            name="pass"
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
        {loading ? <Spineer /> : ""}
        {error ? (
          <p
            style={{
              color: "blue",
            }}
          >
            {error.message}
          </p>
        ) : (
          ""
        )}
        <button type="submit" className="btn form-btn">
          Login
        </button>
      </form>
      <div className="d-flex justify-content-center align-items-center my-4">
        <div className="separator"></div>
        <div className="mx-2">or</div>
        <div className="separator"></div>
      </div>
      <SocialLogin />
    </div>
  );
};

export default Login;
