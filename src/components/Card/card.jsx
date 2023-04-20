import React from "react";
import book from "./book.jpg";
import cloth from "./clothes.jpg";
import toys from "./toys.jpg";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="card flex flex-col cursor-pointer w-full mt-3 h-full items-center justify-center">
      <div className="h-[90%] flex w-full justify-between">
        <div className="h-full w-[32%] flex flex-col justify-center items-center">
          <Link to="books" className="h-full">
            <img
              className="h-[90%] w-full rounded-2xl"
              src={book}
              alt="book_img"
            />
            <p className="text-2xl font-bold m-2 text-center">Books</p>
          </Link>
        </div>
        <div className="h-full w-[32%] flex flex-col justify-center items-center">
          <Link to="clothes" className="h-full">
            <img
              className="h-[90%] w-full rounded-2xl"
              src={cloth}
              alt="clothes_img"
            />
            <p className="text-2xl font-bold m-2 text-center">Clothes</p>
          </Link>
        </div>
        <div className="h-full w-[32%] flex flex-col justify-center items-center">
          <Link to="toys" className="h-full">
            <img
              className="h-[90%] w-full rounded-2xl"
              src={toys}
              alt="clothes_img"
            />
            <p className="text-2xl font-bold m-2 text-center">Toys</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
