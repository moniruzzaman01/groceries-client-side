import React from "react";
import "./Spineer.css";

const Spineer = () => {
  return (
    <div className="spineer">
      <div
        className="spinner-border  position-absolute start-50 bottom-50"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spineer;
