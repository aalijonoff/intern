import React, { useEffect, useState } from "react";
import Card from "../card/index";
import MultipleItems from "../cardcorousel";
import CardCarousel from "../Carousel";
import "antd/dist/antd.css";
import {
  Body,
  Container,
  Wrapper,
  Results,
} from "../properties/styled";
import { Footer } from "../footer";

const Contacts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://houzing-app.herokuapp.com/api/v1/houses/list")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <Wrapper>
      <Body>
        <Results> {data?.data?.length} liked</Results>
        <Container>
          {data?.data?.map((value) => {
            return <Card key={value.id} data={value} />;
          })}
        </Container>
      </Body>
      <Footer />
    </Wrapper>
  );
};

export default Contacts;
