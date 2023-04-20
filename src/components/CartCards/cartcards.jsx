import React from "react";

function CartCards(props) {
  return (
    <div className="h-1/3 mb-2 w-full">
      <div className="h-full w-full">
        {props.data.map((element) => {
          return (
            <div className="h-full w-full bg-slate-200 mb-5 flex justify-center items-center">
              <div className="h-full w-[70%] flex justify-between items-center">
                <img
                  className="h-[80%] w-[12%]"
                  src={element.image[0]}
                  alt="image_1"
                />
                <div className="font-bold text-xl">{element.title}</div>
                <button className="bg-black h-10 w-24 rounded-3xl text-white">
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartCards;
