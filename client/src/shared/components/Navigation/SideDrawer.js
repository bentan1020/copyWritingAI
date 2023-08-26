import React from "react";


import NavLinks from "./NavLinks";
import Logo from "./Logo.js";
import Profile from "./Profile";

const SideDrawer = () => {
  return (
    <React.Fragment>
      <div className="h-screen flex flex-1 flex-col">
        <Logo />
        <NavLinks />
        <Profile />
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
