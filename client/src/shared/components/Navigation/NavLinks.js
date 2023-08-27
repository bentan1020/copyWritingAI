import React from "react";
import { NavLink } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";

const NavLinks = () => {
  return (
    <ul className="list-none w-full h-full flex flex-col">
      <li className="hover:cursor-pointer hover:bg-blue-500 hover:rounded-md p-3 ml-4 mr-4 flex">
        <HomeIcon style={{ color: "white", marginRight: "3%" }} />
        <NavLink to="/">
          <div className="text-white font-semibold">home</div>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;