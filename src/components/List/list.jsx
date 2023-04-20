import React from "react";
import Products from "../Products/products";
import "./list.css";

function List(props) {
  return (
    <div className="list_div h-[200%] overflow-hidden mb-7 p-3">
      <div className="lists h-full w-full flex flex-wrap">
        {props.data.map((data) => {
          return (
            <div className="list basis-1/5 h-[32.5%]">
              <Products data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
