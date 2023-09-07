import React from "react";

import NavLinks from "./../NavLinks/NavLinks";
import Logo from "./../Logo/Logo";
import Profile from "./../Profile/Profile";

const SideDrawer = () => {
  return (
    <React.Fragment>
      <div className="h-screen flex flex-1 flex-col bg-gradient-to-b from-gray-950 to-gray-900">
        <Logo />
        <NavLinks />
        <Profile />
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
