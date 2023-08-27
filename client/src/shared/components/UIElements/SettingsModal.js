import React from "react";
import "./SettingsModal.css";

const SettingsModal = ({ isOpen, toggleModal }) => {
  if (isOpen) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h2>Settings</h2>
            <p>Setting 1</p>
            <p>Setting 2</p>
            <p>Setting 3</p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default SettingsModal;