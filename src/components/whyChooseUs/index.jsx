import React from "react";
import { Container, Reason, ReasonBox, TitleBox, Wrapper } from "./style";
import Smile from "../../assets/icons/Vector (10).png";
import Home from "../../assets/icons/Vector (11).png";
import Calculator from "../../assets/icons/Vector (12).png";
import Location from "../../assets/icons/Vector (13).png";
const WhyChooseUs = () => {
  return (
    <Wrapper>
    <Container>
      <TitleBox>
        <TitleBox.MainTitle> Why Choose Us?</TitleBox.MainTitle>
        <TitleBox.SubTitle>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </TitleBox.SubTitle>
      </TitleBox>
      <ReasonBox>
        <Reason>
          <Reason.Logo src={Smile} />
          <Reason.MainTitle>Trusted By Thousands</Reason.MainTitle>
          <Reason.SubTitle>
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </Reason.SubTitle>
        </Reason>
        <Reason>
          <Reason.Logo src={Home} />
          <Reason.MainTitle>Wide Renge Of Properties</Reason.MainTitle>
          <Reason.SubTitle>
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </Reason.SubTitle>
        </Reason>
        <Reason>
          <Reason.Logo src={Calculator} />
          <Reason.MainTitle>Financing Made Easy</Reason.MainTitle>
          <Reason.SubTitle>
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </Reason.SubTitle>
        </Reason>
        <Reason>
          <Reason.Logo src={Location} />
          <Reason.MainTitle>See Neighborhoods</Reason.MainTitle>
          <Reason.SubTitle>
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </Reason.SubTitle>
        </Reason>
      </ReasonBox>
    </Container>
    </Wrapper>
  );
};

export default WhyChooseUs;
