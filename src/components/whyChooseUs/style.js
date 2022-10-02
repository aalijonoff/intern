import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: #f5f7fc;
  margin-top: 48px;
`;
const Container = styled.div`
  max-width: 1440px;
  /* height: 434px; */
  min-width: 110px;
  display: flex;
  flex-direction: column;
  padding: 0 130px;
  margin-top: 48px;
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
TitleBox.MainTitle = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #0d263b;
  margin-top: 48px;
  margin-bottom: 8px;
`;
TitleBox.SubTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  margin-bottom: 40px;
`;
const ReasonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  /* width: 1179px; */
  /* height: 230px; */
  gap: 81px;
`;
const Reason = styled.div`
  width: 234px;
  display: flex;
  flex-direction: column;
  /* flex: 1; */
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;
`;
Reason.Logo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
`;
Reason.MainTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: var(--primaryColor);
  margin-top: 24px;
  margin-bottom: 8px;
`;
Reason.SubTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #696969;
`;
export { Container, TitleBox, ReasonBox, Reason, Wrapper };
