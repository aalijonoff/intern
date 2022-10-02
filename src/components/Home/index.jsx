import React from "react";
import Filter from "../../components/Filter";
import Card from "../card";
import Something from "../cardcorousel";
import MultipleItems from "../cardcorousel";
import CardCarousel from "../Carousel";
import Category from "../Category";
import { Footer } from "../footer";
import Recommemded from "../Recommem";
import WhyChooseUs from "../whyChooseUs";
import { Container, Wrapper } from "./style";

export const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Filter />
        <CardCarousel />
        <Recommemded />
        <Something />
        <WhyChooseUs />
        <Category />
      </Container>
      <Footer />
    </Wrapper>
  );
};
export default Home;
