import React from "react";

const Spineer = () => {
  return (
    <div
      className="spinner-border  position-absolute start-50 bottom-50"
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Spineer;
