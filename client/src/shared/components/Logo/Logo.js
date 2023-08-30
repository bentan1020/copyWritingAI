import React from "react";
import { NavLink } from "react-router-dom";
import favicon from "../../../assets/StreamlineSelling Favicon.png";

const Logo = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        margin: "calc(1vw + 1vh)",
        padding: "calc(0.5vw + 0.5vh)",
      }}
    >
      <NavLink to="/protected">
        <div className="flex max-w-full h-auto items-center hover:cursor-pointer">
          <div
            className="mr-3"
            style={{
              marginRight: "calc(0.3vw + 0.3vh)",
            }}
          >
            <img
              src={favicon}
              alt="Profile Picture"
              className="w-8 max-w-full h-auto rounded-md object-cover"
            />
          </div>
          <div
            className="items-center font-bold text-white flex"
            style={{ fontSize: "calc(1vw)" }}
          >
            StreamlineSelling
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Logo;