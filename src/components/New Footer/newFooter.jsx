import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function NewFooter() {
  return (
    <div className="flex h-[37%] bg-slate-600 w-full text-white text-lg">
      <div className="h-full w-[25%] flex flex-col items-center justify-center">
        <div className="w-3/4 mb-5">
          <div className="text-5xl mb-7">Donato</div>
          <div className="flex justify-between mb-1">
            <p> Home</p>
            <span> | </span>
            <p> About</p>
            <span> | </span>
            <p> Contact</p>
            <span> | </span>
            <p> Create</p>
          </div>
          <div className="text-base">Copyright © 2023</div>
        </div>
      </div>
      <div className="h-full w-[47%] flex flex-col items-center justify-center">
        <div className="mb-3">
          <div className="flex ">
            <div className="bg-black text-white h-11 w-11 flex justify-center items-center rounded-full mr-8 mb-4">
              <PlaceIcon />
            </div>
            <div className="h-11 flex justify-center items-center">
              <h2>Bihar, India</h2>
            </div>
          </div>
          <div className="flex">
            <div className="bg-black text-white h-11 w-11 flex justify-center items-center rounded-full mr-8 mb-4">
              <PhoneIcon />
            </div>
            <div className="h-11 flex justify-center items-center">
              <h2>+91 9876543210</h2>
            </div>
          </div>
          <div className="flex">
            <div className="bg-black text-white h-11 w-11 flex justify-center items-center rounded-full mr-8">
              <EmailIcon />
            </div>
            <div className="h-11 flex justify-center items-center">
              <h2>donato@gmail.com</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-[25%] flex flex-col items-center justify-center">
        <div className="mb-6">
          <div className="font-bold mb-3">About The Company</div>
          <div className="text-base mb-5">
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </div>
          <div className="flex w-1/2 ml-2 justify-between">
            <div>
              <FacebookIcon className="scale-[175%]" />
            </div>
            <div className="">
              <InstagramIcon className="scale-[175%]" />
            </div>
            <div className="">
              <GitHubIcon className="scale-[175%]" />
            </div>
            <div className="">
              <LinkedInIcon className="scale-[175%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewFooter;
