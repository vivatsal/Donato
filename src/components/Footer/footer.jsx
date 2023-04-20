import React from "react";
import Fcards from "../Fcards/fcards";

function Footer() {
  return (
    <div className="footer h-[13%] sticky bottom-0 opacity-[1] z-50 bg-gray-100">
      <div className="h-full w-full footer-div">
        <Fcards />
      </div>
    </div>
  );
}

export default Footer;
