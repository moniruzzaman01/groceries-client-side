import React from "react";
import "./DialogBox.css";

const DialogBox = ({ confirmBtnHandle, cancelBtnHandle }) => {
  return (
    <div className="dialog-container">
      <div className="dialog-box">
        <h2>Confirm Delete!</h2>
        <p>Are you sure?</p>
        <div className="btn">
          <button onClick={cancelBtnHandle} className="cancel">
            Cancel
          </button>
          <button onClick={confirmBtnHandle} className="confirm">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
