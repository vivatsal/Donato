import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HouseIcon from "@mui/icons-material/House";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import InfoIcon from "@mui/icons-material/Info";

function Fcards() {
  return (
    <div className="h-full w-full">
      <div className="flex h-full text-zinc-900 font-semibold cursor-pointer w-full items-center justify-center">
        <div className="h-full flex flex-col items-center justify-center w-1/4 border-gray-400">
          <HouseIcon className="scale-[2] mt-2 mb-2 " />
          <p>Home</p>
        </div>
        <div className="h-full flex flex-col items-center justify-center w-1/4  border-gray-400">
          <AccountCircleIcon className="scale-[2] mt-2 mb-2" />
          <p>Account</p>
        </div>
        <div className="h-full flex flex-col items-center justify-center w-1/4  border-gray-400">
          <InfoIcon className="scale-[2] mt-2 mb-2" />
          <p>Info</p>
        </div>
        <div className="h-full flex flex-col items-center justify-center w-1/4 border-gray-400">
          <SupportAgentIcon className="scale-[2] mt-2 mb-2" />
          <p>Support</p>
        </div>
      </div>
    </div>
  );
}

export default Fcards;
