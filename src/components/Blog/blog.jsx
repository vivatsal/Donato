import BlogCard from "../Blog Card/blogcard";
import React from "react";

function Blogs() {
  return (
    <div className="blogs h-[60%] flex justify-center w-full text-xl">
      <div className="cat flex flex-col items-center font-bold m-5 w-full">
        <div className="cat-title">
          <p className="text-3xl font-bold">Blogs</p>
        </div>
        <div className="card h-[96%] w-full">
          <BlogCard />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
