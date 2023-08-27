import React from "react";


import NavLinks from "./NavLinks";
import Logo from "./Logo.js";
import Profile from "./Profile";
import Modal from "../UIElements/Modal";

const SideDrawer = () => {
  return (
    <React.Fragment>
      <div className="h-screen flex flex-1 flex-col bg-blue-600">
        <Logo />
        <NavLinks />
        <Modal />
        <Profile />
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
