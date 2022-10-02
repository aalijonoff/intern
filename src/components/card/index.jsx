import React from "react";
import Featured from "../../assets/images/featured (1).png";
import Sale from "../../assets/images/sale.png";
import Bed from "../../assets/images/bed.png";
import Bath from "../../assets/images/bath.png";
import Garage from "../../assets/images/garage.png";
import Size from "../../assets/images/size.png";
import Resize from "../../assets/images/resize.png";
import UserFace from "../../assets/images/Ellipse3.png";
import Uycha from "../../assets/images/uycha.jpg";
import Like from "../../assets/icons/like.svg";
import {
  Container,
  Cards,
  CardsAbout,
  Furniture,
  FurnitureContainer,
  CardFooter,
  CardFooterRight,
  CardFooterLeft,
} from "./styled";

const Card = ({ data }) => {
  return (
    <Cards key={data.id}>
      <Cards.Img src={Uycha} />
      <Cards.Featured src={Featured} />
      <Cards.Sale src={Sale} />
      <Cards.User src={UserFace} />
      <CardsAbout>
        <CardsAbout.Title>{data.name}</CardsAbout.Title>
        <CardsAbout.Location>{data.address}</CardsAbout.Location>
        <FurnitureContainer>
          <Furniture>
            <Furniture.Logo src={Bed} />
            <Furniture.Text>{data.houseDetails.beds} Beds</Furniture.Text>
          </Furniture>{" "}
          <Furniture>
            <Furniture.Logo src={Bath} />
            <Furniture.Text>{data.houseDetails.bath} Baths</Furniture.Text>
          </Furniture>{" "}
          <Furniture>
            <Furniture.Logo src={Garage} />
            <Furniture.Text>{data.houseDetails.garage} Garage</Furniture.Text>
          </Furniture>{" "}
          <Furniture>
            <Furniture.Logo src={Size} />
            <Furniture.Text>{data.houseDetails.area} Sq Ft</Furniture.Text>
          </Furniture>
        </FurnitureContainer>
      </CardsAbout>
      <CardFooter>
        <CardFooterLeft>
          <CardFooterLeft.OldPrice>{data.salePrice}</CardFooterLeft.OldPrice>
          <CardFooterLeft.Price>{data.price}</CardFooterLeft.Price>
        </CardFooterLeft>
        <CardFooterRight>
          <CardFooterRight.Resize src={Resize} />
          <CardFooterRight.Like src={Like} />
        </CardFooterRight>
      </CardFooter>
    </Cards>
  );
};

export default Card;
