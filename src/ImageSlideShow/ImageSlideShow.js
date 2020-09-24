import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";
import f1 from "./f1.JPG";
import f2 from "./f2.JPG";
import f3 from "./f3.JPG";

const ImageSlideShow = () => {
  const images = [f1, f2, f3];

  const zoomInProperties = {
    duration: 4000,
    transitionDuration: 3000,
    pauseOnHover: true,
    arrows: false,
    autoplay: true,
    scale: 1.5,
  };

  return (
    <div>
      <div className="slide-container">
        <Zoom {...zoomInProperties}>
          <div className="each-fade">
            <div>
              <img height="300px" width="500px" src={f1} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img height="300px" width="500px" src={f2} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img height="300px" width="500px" src={f3} />
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default ImageSlideShow;
