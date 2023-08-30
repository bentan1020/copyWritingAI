import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const NavLinks = () => {
  return (
    <ul className="list-none w-full h-full flex flex-col">
      <NavLink to="/protected">
        <li
          className="hover:cursor-pointer hover:bg-blue-500 hover:rounded-md flex"
          style={{
            padding: "calc(0.5vw + 0.5vh)",
            marginLeft: "calc(0.5vw + 0.5vh)",
            marginRight: "calc(0.5vw + 0.5vh)",
          }}
        >
          <HomeIcon
            style={{
              color: "white",
              marginRight: "calc(0.5vw + 0.5vh)",
              fontSize: "calc(1.5vw)",
            }}
          />
          <div
            className="text-white font-semibold"
            style={{ fontSize: "calc(1vw)" }}
          >
            Home
          </div>
        </li>
      </NavLink>
    </ul>
  );
};

export default NavLinks;