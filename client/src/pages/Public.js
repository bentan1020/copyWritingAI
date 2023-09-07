import React from "react";
import { useNavigate } from "react-router-dom";

import demo from "../assets/public-pageview-demo.png";
import favicon from "../assets/StreamlineSelling Favicon.png";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const Public = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-gradient-to-b from-gray-950 to-gray-900 text-white min-h-screen">
      {/* header */}
      <div className="flex h-1/6 items-center justify-between">
        <div
          className="flex-1"
          style={{
            marginLeft: "calc(5.5vw + 0vh)",
            marginTop: "calc(4vw)",
          }}
        >
          <div>
            <img src={favicon} className="w-14" />
          </div>
        </div>
        <div
          style={{
            marginRight: "calc(7vw + 0vh)",
            marginTop: "calc(3vw)",
          }}
          className="flex-1 flex flex-row-reverse"
        >
          <button
            onClick={() => {
              navigate("/protected");
            }}
            className="flex items-center font-bold text-lg bg-blue-600 rounded-md p-3 px-6"
          >
            Login
          </button>
        </div>
      </div>

      {/* page view */}
      <div className="font-sans flex flex-col md:flex-row flex-grow">
        {/* left view */}
        <div className="p-12 lg:p-20 flex-1 flex flex-col">
          <div className="mb-4 text-left font-black capitalize text-xl md:text-4xl">
            A super App for entrepreneurs, consultants, and marketers
          </div>
          <div className="mb-4 font-bold capitalize text-lg md:text-xl">
            Write better ads, in less time.
          </div>
          <div className="mb-7 font-normal text-base md:text-lg">
            We train our AI model on the best copies and headlines that have
            ever performed. You can expect the same result.
          </div>
          <div>
            <button
              onClick={() => {
                navigate("/protected");
              }}
              className="flex items-center font-bold text-lg bg-blue-600 p-4 border-slate-500 rounded-md"
            >
              <div className="ml-4 mr-4 md:mr-16">TRY FOR FREE</div>
              <div className="flex justify-center items-center bg-white p-2 rounded-full">
                <KeyboardDoubleArrowUpIcon color="primary" />
              </div>
            </button>
          </div>
        </div>

        {/* right view */}
        <div className="flex-1 p-12">
          <img src={demo} alt="App Demo" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Public;
