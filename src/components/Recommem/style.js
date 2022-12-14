import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-bottom: 32px;
  background: var(--background);
`;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  align-items: center;
  justify-content: center;
`;
const Title = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  color: #0d263b;
  margin-top: 96px;
  margin-bottom: 6px;
`;
const Item = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  text-align: center;
`;

export { Container, Title, Item };
