import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Social-login/SocialLogin";
import "./Login.css";
import auth from "../../firebase.init";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import Spineer from "../Spineer/Spineer";
import { toast } from "react-toastify";
import useToken from "../../hooks/useToken";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user);
  const [sendPasswordResetEmail, sending, ResetError] =
    useSendPasswordResetEmail(auth);

  const [email, setEmail] = useState("");
  const [authUser, authLoading] = useAuthState(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const password = event.target.pass.value;

    await signInWithEmailAndPassword(email, password);
  };

  const handleResetPass = async () => {
    await sendPasswordResetEmail(email);
    toast("password reset email sended!");
  };

  if (authLoading) {
    return <Spineer />;
  }

  if (token) {
    navigate(from, { replace: true });
  }

  return (
    <>
      {loading ? <Spineer /> : ""}
      <div className="login-form-container">
        <h1>Please Login Here!!!</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              onBlur={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
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
              required
            />
          </div>
          <p>
            Forgot password?{" "}
            <span
              onClick={handleResetPass}
              style={{
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              reset password
            </span>
          </p>
          <p>
            New in groceries?{" "}
            <Link className="link" to="/sign-up">
              Create an account
            </Link>
          </p>
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
    </>
  );
};

export default Login;
