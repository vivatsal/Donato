import React from "react";
import Navbar from "../../Navbar/navbar";
import NewFooter from "../../New Footer/newFooter";

function Contact() {
  return (
    <div className="h-screen text-lg font-bold">
      <Navbar />
      <form action="/" className="h-[80%]">
        <div className="contact w-full flex flex-col justify-between items-center h-full">
          <div className="font-bold text-3xl mt-8 mb-2">
            <p>Contact Us</p>
          </div>
          <div className="name m-4 flex justify-between items-center h-[20%] w-1/4">
            <label>Name : </label>
            <input type="text" className="outline w-3/4" required />
          </div>
          <div className="email mb-4 flex justify-between items-center h-[20%] w-1/4">
            <label>Email : </label>
            <input type="email" className="outline w-3/4" required />
          </div>
          <div className="mobile mb-10 flex justify-between items-center h-[20%] w-1/4">
            <label>Mobile : </label>
            <input type="text" className="outline w-3/4" required />
          </div>
          <div className="message mb-12 flex justify-between items-center h-[20%] w-1/4">
            <label>Message : </label>
            <textarea
              rows="3"
              className="outline w-3/4 text-base rows-4"
              required
            />
          </div>
          <div className="rounded-3xl h-[13%] w-[10%] flex justify-center items-center mb-14">
            <button className="h-full w-full rounded-3xl bg-black text-white">
              Submit
            </button>
          </div>
        </div>
      </form>
      <NewFooter />
    </div>
  );
}

export default Contact;
