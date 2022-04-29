import React from "react";
import "./SignUp.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Social-login/SocialLogin";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spineer from "../Spineer/Spineer";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.pass.value;

    createUserWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="mx-auto my-5 container signup-form-container">
      <h1>Please Register Here!!!</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputName1">Your Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleInputName1"
            placeholder="Your Name"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
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
          Have an account?{" "}
          <Link className="link" to="/login">
            Login
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
          SignUp
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

export default SignUp;
