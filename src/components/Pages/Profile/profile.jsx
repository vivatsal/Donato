import React from "react";
import Navbar from "../../Navbar/navbar";
import NewFooter from "../../New Footer/newFooter";
import { arr2 } from "../../../assets/data2";

function Profile() {
  let url =
    "http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/12/Best-Quality-Profile-Images-Pic-Download-2023.jpg";
  return (
    <div className="h-screen w-full">
      <Navbar />
      <div className="profile font-bold text-3xl mt-10 text-center">
        <p>Profile</p>
      </div>
      <div className="h-4/5 w-full px-[10%] mt-10">
        <div className="profile flex w-full h-2/5 mb-10">
          <div className="details h-full flex justify-center items-center w-8/12 bg-slate-400 text-2xl font-bold">
            <div className="h-3/4 w-3/4 flex flex-col justify-between">
              <p className="text-3xl">Viven Vatsal</p>
              <p>vatsalviven@gmail.com</p>
              <p>+91 9876543210</p>
              <p>Bihar, India</p>
            </div>
          </div>
          <div className="pic flex justify-center items-center w-4/12 bg-red-300">
            <img
              className="w-1/2 rounded-md h-[70%]"
              src={url}
              alt="profile_img"
            />
          </div>
        </div>
        <div className="h-1/4">
          <p className="text-2xl font-bold mb-10">Orders</p>
          <div className="h-full flex justify-between items-center bg-slate-500 px-[12%]">
            <img
              className="h-3/4 w-[12%]"
              src={arr2[0].image}
              alt="order_img"
            />
            <p className="font-bold text-xl">{arr2[0].title}</p>
            <p className="font-bold text-xl">{arr2[0].genre}</p>
          </div>
        </div>
      </div>
      <NewFooter />
    </div>
  );
}

export default Profile;
