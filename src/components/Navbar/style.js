import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as logoIcon } from "../../assets/icons/logo.svg";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primaryColor);
  width: 100%;
  @media screen and (max-width: 800px) {
    margin: 0 50%;
    padding: 0;
  }
`;
export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  max-width: 1440px;
  padding: 0 130px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  width: 100%;
  color: #ffffff;
  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    padding: 0 0 !important;
    width: 400px;
    font-weight: auto;
    font-size: auto;
  }
`;

export const NavbarBody = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: white;
  .active {
    color: #00fff5;
  }
`;
export const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin: 0 32px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

Logo.Icon = styled(logoIcon)`
  @media screen and (max-width: 800px) {
    width: 3 0px;
    height: 30px;
  }
`;
Logo.Title = styled("div")`
  margin-left: 11px;
  font-size: 20px;
  font-weight: 500px;
`;
