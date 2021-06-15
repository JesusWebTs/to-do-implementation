import React from "react";
import ReactDOM from "react-dom";
import "./styles.css"
export default function Modal({ children, show, closeModal }) {
  if (show) {
    return ReactDOM.createPortal(
      <div className="modal-container">
        <div className="modal-container__content">
          <button
            className="modal-container__close-button "
            onClick={closeModal}
          >
            ❌
          </button>
          {children}
        </div>
      </div>,
      document.getElementById("root-portal")
    );
  } else return null;
}
