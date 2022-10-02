import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 19px;
`;
export const Body = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat (auto-fit, minmax (300px, 1fr));
  grid-auto-rows: auto;
  width: 100%;
  padding: 0 130px;
  max-width: var (--width);
  margin-bottom: 16px;
  @media screen and (max-width: 400px) {
    padding: 0 0;
    margin-bottom: 9px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px !important;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  margin-top: 64px;
  color: #0d263b;
  @media screen and (max-width: 600px) {
    margin: 32px 0 8px 0;
  }
`;
export const Item = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  text-align: center;
  margin-bottom: 70px;
  @media screen and (max-width: 600px) {
    margin: 0 0 8px 0;
  }
`;

export const Results = styled.div`
  width: 100%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
`;
