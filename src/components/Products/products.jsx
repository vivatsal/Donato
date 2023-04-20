import React from "react";
import { Link } from "react-router-dom";

function Products(props) {
  return (
    <div className="products_div h-full w-full overflow-hidden cursor-pointer">
      <Link to="/description">
        <div className="products w-full h-full font-bold">
          <div className="w-full h-[50%] mt-8 flex justify-center mb-4">
            <img
              src={props.data.image}
              className="w-3/4 h-full"
              alt="book_img"
            />
          </div>
          <div className="w-full flex text-2xl ml-5 mt-6">
            {props.data.title}
          </div>
          <div className="w-full flex ml-5 mb-2">{props.data.author}</div>
          <div className="ml-5 text-white bg-black w-10 h-6 text-sm text-center mb-2">
            {props.data.rating}★
          </div>
          <div className="w-full flex ml-5 mb-1">{props.data.genre}</div>
          <div className="w-full flex ml-5">{props.data.condition}</div>
          {/* <div className="h-[15%] w-full flex justify-center">
          <button className="bg-black rounded-3xl text-lg text-white h-full w-3/4">
            Add to Cart
          </button>
        </div> */}
        </div>
      </Link>
    </div>
  );
}

export default Products;
