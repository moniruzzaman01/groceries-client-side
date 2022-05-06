import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Spineer from "../Spineer/Spineer";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [token] = useToken(user);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = (event) => {
    signInWithGoogle();
  };
  if (token) {
    navigate(from, { replace: true });
  }
  return (
    <>
      {loading ? <Spineer /> : ""}
      <div>
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
        <button className="btn form-btn" onClick={handleGoogleSignIn}>
          GoogleSignIn
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
