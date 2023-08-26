import React from "react";

import ImportExportIcon from '@mui/icons-material/ImportExport';

const Profile = () => {
  return (
    <div className="flex hover:cursor-pointer hover:bg-gray-200 m-4 hover:rounded-md">
      <div className="flex-1 flex items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Andrew_Tate_-_James_Tamim_Upload_%28Cropped_Wide_Portrait%29.png"
          alt="Profile Picture"
          className="w-12 h-12 rounded-md object-cover"
        ></img>
      </div>
      <div className="flex-1 flex items-center">Name</div>
      <div className="flex items-center">
        <ImportExportIcon />
      </div>
    </div>
  );
};

export default Profile;