import React, { useRef } from "react";
import {
  CarouselWrapper,
  Left,
  Right,
  Img,
  MainCarousel,
} from "./style";

import img1 from "../../assets/images/uycha.jpg";
import img2 from "../../assets/images/uy.jpg";
import "antd/dist/antd.css";
export const Carousel = () => {
  const slider = useRef();
  return (
    <CarouselWrapper>
      <Left onClick={() => slider.current?.prev()} />
      <Right onClick={() => slider.current?.next()} />
      <MainCarousel ref={slider} dots autoplay>
        <div>
          <Img src={img1} alt="img" />
        </div>
        <div>
          <Img src={img2} alt="img" />
        </div>
        <div>
          <Img src={img1} alt="img" />
        </div>
        <div>
          <Img src={img2} alt="img" />
        </div>
        <div>
          <Img src={img1} alt="img" />
        </div>
        <div>
          <Img src={img2} alt="img" />
        </div>
      </MainCarousel>
    </CarouselWrapper>
  );
};

export default Carousel;
