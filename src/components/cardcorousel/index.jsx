import Card from "../card";
import React, { useRef } from "react";
import Slider from "react-slick";
import { CarouselWrapper, Left } from "../Carousel/style";
import { Wrapper } from "./styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

const Something = () => {
  return (
    <Wrapper>
    <Slider {...settings}>
      <h1>1</h1>
      <h1>2</h1>
      <h1>3</h1>
      <h1>4</h1>
      <h1>5</h1>
      <h1>6</h1>
      <h1>7</h1>
    </Slider>
    </Wrapper>
  );
};

export default Something;
