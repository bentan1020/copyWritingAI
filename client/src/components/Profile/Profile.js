import React, { useState } from "react";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import SettingsModal from "./../SettingModal/SettingsModal";
import { useUser } from "@clerk/clerk-react"

const Profile = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { user } = useUser();

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div
      className="flex hover:bg-blue-500 hover:rounded-md"
      style={{
        padding: "calc(0.5vw + 0.5vh)",
        margin: "calc(0.5vw + 0.5vh)",
      }}
    >
      <div
        onClick={toggleModal}
        className="hover:cursor-pointer flex items-center w-full"
      >
        <div
          className="mr-3"
          style={{
            marginRight: "calc(0.5vw + 0.5vh)",
          }}
        >
          <img
            src={user.imageUrl}
            alt="Profile Picture"
            className="rounded-md object-cover"
            style={{
              width: "calc(2vw + 2vh)",
              height: "calc(2vw + 2vh)",
            }}
          ></img>
        </div>
        <div
          className="flex-1 flex items-center text-white font-semibold"
          style={{ fontSize: "calc(0.80vw)" }}
        >
          {user.fullName}
        </div>
        <div className="flex items-center">
          <ImportExportIcon style={{ color: "white", fontSize: "calc(1vw)" }} />
        </div>
      </div>

      <SettingsModal isOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  );
};

export default Profile;
