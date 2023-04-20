import React from "react";
import book from "./books2.jpg";
import cloth from "./clothes2.jpg";
import toys from "./toys2.jpg";

function BlogCard() {
  return (
    <div className="card flex flex-col cursor-pointer w-full h-full items-center justify-center">
      <div className="h-[90%] flex w-full justify-between">
        <div className="h-full w-[32%] flex flex-col justify-center items-center">
          <img
            className="h-[90%] w-full rounded-2xl"
            src={toys}
            alt="book_img"
          />
        </div>
        <div className="h-full w-[32%] flex flex-col justify-center items-center">
          <img
            className="h-[90%] w-full rounded-2xl"
            src={cloth}
            alt="clothes_img"
          />
        </div>
        <div className="h-full w-[32%] flex flex-col justify-center items-center">
          <img
            className="h-[90%] w-full rounded-2xl"
            src={book}
            alt="clothes_img"
          />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
