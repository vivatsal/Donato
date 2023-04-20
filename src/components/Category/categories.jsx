import Card from "../Card/card";
import React from "react";

function Categories() {
  return (
    <div className="category h-[60%] flex justify-center w-full mt-3 text-xl">
      <div className="cat flex flex-col items-center font-bold m-5 w-full">
        <div className="cat-title">
          <p className="text-3xl font-bold">Categories</p>
        </div>
        <div className="card h-[96%] w-full">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Categories;
