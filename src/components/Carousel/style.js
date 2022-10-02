import { Carousel } from "antd";
import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/carousel.svg";

const CarouselWrapper = styled.div`
  width: 100%;
  z-index: 0;
  text-align: center;
  position: relative;
`;
const MainCarousel = styled(Carousel)`
  /* max-width: 1440px; */
  width: 100%;
  display: flex;
`;
const Img = styled.img`
  width: 100%;
  height: 571px;
  z-index: -2;
  /* position: absolute; */
  @media screen and (max-width: 800px) {
    height: 300px;
    z-index: -1;
  }
`;

export const Left = styled(arrow)`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translate(100%, -50%) rotate(180deg);
  width: 45px;
  height: 45px;
  color: white;
  background: white;
  padding: 12px;
  opacity: 0.5;
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
  :hover {
    opacity: 0.97;
  }
  & path {
    fill: #0d263b;
  }
`;
export const Right = styled(arrow)`
  text-align: center;
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translate(-100%, -50%);
  width: 45px;
  height: 45px;
  color: white;
  background: white;
  padding: 12px;
  opacity: 0.5;
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
  :hover {
    opacity: 0.97;
  }
  & path {
    fill: #0d263b;
  }
`;

export const ZContainer = styled.div`
  width: 100%;
  /* background: rgba(0, 0, 0, 0.65); */
  background-color: yellow;
  opacity: 65%;
  top: 0;
  bottom: 0;
  color: green;
  /* position: relative; */
  z-index: 1;
`;
export const Text = styled.h1`
  color: red;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
`;

export { CarouselWrapper, MainCarousel, Img };
