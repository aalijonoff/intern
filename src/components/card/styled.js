import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  padding: 0 130px;
  gap: 19px;
  margin: 0 0 0 0 !important;
  background: var(--background);
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 130px !important;
  gap: 19px;
  margin: 0 0 0 0 !important;
  background-color: #fff;
`;
const Cards = styled.div`
  display: flex !important;
  flex-direction: column;
  width: 380px;
  max-width: 380px;
  min-width: 380px;
  height: 429px;
  background-color: var(--text-color);
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  position: relative;
`;
Cards.Img = styled.img`
  width: 100%;
  height: 220px;
  z-index: -1;
`;
Cards.Featured = styled.img`
  width: 73px;
  position: absolute;
  height: 23px;
  left: 5.26%;
  right: 75.53%;
  top: calc(50% - 23px / 2 - 183px);
  border-radius: 3px;
`;
Cards.Sale = styled.img`
  position: absolute;
  height: 23px;
  left: 76.05%;
  right: 5.26%;
  top: calc(50% - 23px / 2 - 183px);
`;
Cards.User = styled.img`
  position: absolute;
  width: 38px;
  height: 38px;
  left: 320px;
  top: 191px;
  border: 1.5px solid white;
  background-color: aliceblue;
  border-radius: 50%;
  text-align: center;
`;
const CardsAbout = styled.div`
  display: flex;
  flex-direction: column;
  height: 148px;
  padding-left: 20px;
  padding-right: 20px;
`;
CardsAbout.Title = styled.div`
  display: flex;
  margin-top: 24px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;
CardsAbout.Location = styled.div`
  margin-top: 4px;
  color: #696969;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

const FurnitureContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Furniture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
Furniture.Logo = styled.img`
  padding-top: 18.7px;
  padding-bottom: 5px;
  color: var(--sub-texts-color);
`;
Furniture.Text = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--sub-texts-color);
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 20px;
  height: 60px;
  margin-bottom: 20px;
  align-items: center;
  margin-top: 16px;
  border-top: 1px solid #696969;
`;
const CardFooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
CardFooterLeft.OldPrice = styled.div`
  color: var(--sub-text-color);
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;
CardFooterLeft.Price = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
`;
const CardFooterRight = styled.div`
  display: flex;
  align-items: center;
`;
CardFooterRight.Resize = styled.img`
  margin-left: 0px;
  height: 17px;
  color: green !important;
  cursor: pointer;
`;
CardFooterRight.Like = styled.img`
  margin-left: 20px;
  width: 35px;
  height: 35px;
  padding: 10px;
  background-color: rgb(247, 248, 249);
  border-radius: 50%;
  color: black !important;
  cursor: pointer;
  :active {
    background-color: #cc5040;
    color: white;
  }
`;
export {
  Wrapper,
  Container,
  Cards,
  CardsAbout,
  FurnitureContainer,
  Furniture,
  CardFooter,
  CardFooterLeft,
  CardFooterRight,
};
