import { useNavigate } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";

import "./SettingsModal.css";

const SignOutButton = () => {
  const { signOut } = useClerk();
  const navigate = useNavigate();

  return (
    <button className="bg-red-500 rounded-md p-2"
      onClick={async () => {
        await signOut();
        navigate("/");
      }}
    >
      Sign out
    </button>
  );
};

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
            <SignOutButton />
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsModal;
