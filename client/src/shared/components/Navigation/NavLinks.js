import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="list-none w-full h-full flex flex-col">
      <li className="mt-2/100 mb-2/100 hover:bg-blue-200 hover:cursor-pointer">
        <NavLink to="/">
          Copy Lab
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
