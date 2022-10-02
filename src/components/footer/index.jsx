import React from "react";
import {
  Container,
  FooterBottom,
  Left,
  Right,
  Rows,
  Wrapper,
  LinkLogo,
  SMbox,
} from "./style";
import Logo from "../../assets/images/logoMain.png";
import toTop from "../../assets/images/toTop.png";
import Location from "../../assets/icons/pin.png";
import Call from "../../assets/icons/call.png";
import Mail from "../../assets/icons/email.png";
import Facebook from "../../assets/icons/facebook.png";
import Twitter from "../../assets/icons/twitter.png";
import Instagramm from "../../assets/icons/instagramm.png";
import LinkedIn from "../../assets/icons/linkedin.png";
import { NavbarBody } from "../Navbar/style";
export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Rows>
          <Rows.RowTitle>Contacts Us</Rows.RowTitle>
          <Rows.LinksContainer>
            <LinkLogo src={Location} />
            <Rows.Links>
              329 Queensberry Street, North Melbourne VIC 3051, Australia.
            </Rows.Links>
          </Rows.LinksContainer>
          <Rows.LinksContainer>
            <LinkLogo src={Call} />
            <Rows.Links>123 456 7890</Rows.Links>
          </Rows.LinksContainer>
          <Rows.LinksContainer>
            <LinkLogo src={Mail} />
            <Rows.Links>support@houzing.com</Rows.Links>
          </Rows.LinksContainer>
          <SMbox>
            <SMbox.Logo src={Facebook} />

            <SMbox.Logo src={Twitter} />

            <SMbox.Logo src={Instagramm} />
            <SMbox.Logo src={LinkedIn} />
          </SMbox>
        </Rows>
        <Rows>
          <Rows.RowTitle>Contacts</Rows.RowTitle>
          <Rows.Links>Chicago</Rows.Links>
          <Rows.Links>Los Angeles</Rows.Links>
          <Rows.Links>Miami</Rows.Links>
          <Rows.Links>New York</Rows.Links>
        </Rows>
        <Rows>
          <Rows.RowTitle>Lists by Category</Rows.RowTitle>
          <Rows.Links>Apartments</Rows.Links>
          <Rows.Links>Condos</Rows.Links>
          <Rows.Links>Houses</Rows.Links>
          <Rows.Links>Offices</Rows.Links>
          <Rows.Links>Retail</Rows.Links>
          <Rows.Links>Villas</Rows.Links>
        </Rows>
        <Rows>
          <Rows.RowTitle>Lists by Category</Rows.RowTitle>
          <Rows.Links>About Us</Rows.Links>
          <Rows.Links>Terms & Conditions</Rows.Links>
          <Rows.Links>Support Center</Rows.Links>
          <Rows.Links>Contact Us</Rows.Links>
        </Rows>
      </Container>
      <FooterBottom>
        <Left src={Logo} />
        <Right>
          <Right.Text>
            Copyright © 2021 CreativeLayers. All Right Reserved.
          </Right.Text>
          <Right.Button onClick = {<NavbarBody/>} >
            <Right.Top src={toTop} />
          </Right.Button>
        </Right>
      </FooterBottom>
    </Wrapper>
  );
};
