import React from "react";

import ImportExportIcon from "@mui/icons-material/ImportExport";

const Profile = () => {
  return (
    <div className="flex hover:cursor-pointer hover:bg-blue-500 m-2 hover:rounded-md p-2">
      <div className="mr-3">
        <img
          src="https://youthscape.ams3.cdn.digitaloceanspaces.com/images/16723620780107.remini-enhanced.jpg"
          alt="Profile Picture"
          className="w-12 h-12 rounded-md object-cover"
        ></img>
      </div>
      <div className="flex-1 flex items-center text-sm text-white font-semibold">
        Andrew Tate
      </div>
      <div className="flex items-center">
        <ImportExportIcon style={{ color: "white" }} />
      </div>
    </div>
  );
};

export default Profile;