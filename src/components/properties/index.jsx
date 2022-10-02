import React, { useEffect, useState } from "react";
import { Body, Container, Item, Wrapper, Title, Results } from "./styled";
import Card from "../card/index";
import Button from "../Generic/Button";
import { Footer } from "../footer";
import Filter from "../Filter";

const Properties = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://houzing-app.herokuapp.com/api/v1/houses/list")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  console.log(data, "data");
  return (
    <Wrapper>
      <Filter />
      <Title>Properties</Title>
      <Item>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </Item>
      <Body>
        <Results> {data?.data?.length} results</Results>
        <Container>
          {data?.data?.map((value) => {
            return <Card key={value.id} data={value} />;
          })}
        </Container>
      </Body>
      <Button mr="64px" width="238px" type="primary">
        Show More
      </Button>
      <Footer />
    </Wrapper>
  );
};
export default Properties;
