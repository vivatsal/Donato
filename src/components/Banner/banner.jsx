import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";

function Banner() {
  return (
    <div className="p-2 banner w-full h-[60%] mt-4">
      <Carousel
        autoPlay={true}
        showThumbs={false}
        emulateTouch={true}
        showArrows={true}
        showStatus={false}
        infiniteLoop={true}
        className="h-full"
      >
        <div>
          <img className="h-[60vh]" src={img1} alt="img1" />
        </div>
        <div>
          <img className="h-[60vh]" src={img2} alt="img2" />
        </div>
        <div>
          <img className="h-[60vh]" src={img3} alt="img3" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
