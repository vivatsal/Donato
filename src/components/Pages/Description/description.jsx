import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Navbar from "../../Navbar/navbar";
import NewFooter from "../../New Footer/newFooter";

function Description(props) {
  return (
    <div className="description w-full h-screen">
      <Navbar />
      <div className="desc h-[60%] w-full flex justify-center items-center p-10 mb-6 overflow-hidden">
        <div className="h-full w-[40%] flex justify-center items-center">
          <Carousel
            className="h-full w-full"
            autoPlay={true}
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            infiniteLoop={true}
            emulateTouch={true}
          >
            {props.data.image.map((url) => {
              return (
                <div className="images w-full h-[39.2%]">
                  <img className="h-full w-full" src={url} alt="images" />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="details h-full w-[45%] text-lg">
          <div className="mx-10 font-semibold flex flex-col justify-center">
            <div className="font-bold text-3xl mb-2">{props.data.title}</div>
            <div className="bg-black text-white w-11 text-center mb-1">
              {props.data.rating}★
            </div>
            <div className="">{props.data.author}</div>
            <div className="mb-2">{props.data.genre}</div>
            <div className="w-1/5 h-8 flex justify-center items-center rounded-2xl text-white bg-black mb-2">
              <button className="text-base">Add to Cart</button>
            </div>
            <div className="mb-1">Condition: {props.data.condition}</div>
            <div className="mb-1">Pages: {props.data.pages}</div>
            <div className="font-normal">{props.data.description}</div>
          </div>
        </div>
      </div>
      <NewFooter />
    </div>
  );
}

export default Description;
