import React from "react";
import { NavLink } from "react-router-dom";
import favicon from "./../../../../assets/StreamlineSelling Favicon.png";

const Logo = () => {
  return (
    <div className="flex justify-center items-center m-4 p-4">
      <div className="flex hover:cursor-pointer">
        <div className="mr-3">
          <NavLink to="/">
            <img
              src={favicon}
              alt="Profile Picture"
              className="w-8 h-8 rounded-md object-cover"
            />
          </NavLink>
        </div>
        <div className="flex-1 flex items-center text-md text-lg font-bold text-white">
          StreamlineSelling
        </div>
      </div>
    </div>
  );
};

export default Logo;
