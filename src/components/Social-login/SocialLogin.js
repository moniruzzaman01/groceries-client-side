import React from "react";

const SocialLogin = () => {
  const handleGoogleSignIn = (event) => {
    console.log("hello");
  };
  return (
    <div>
      <button className="btn form-btn" onClick={handleGoogleSignIn}>
        GoogleSignIn
      </button>
    </div>
  );
};

export default SocialLogin;
