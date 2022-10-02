import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #0d263b;
  flex-direction: column;
  margin-top: 64px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 130px;
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Rows = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  margin-top: 48px;
  gap: 20px;
  min-width: 150px;
`;
Rows.RowTitle = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  width: 100%;
  display: flex;
  color: #ffffff;
`;
Rows.Links = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  color: #ffffff;
  cursor: pointer;
  :hover {
    text-decoration: underline 2px #0160df;
  }
`;
Rows.LinksContainer = styled.div`
  display: flex;
`;
export const SMbox = styled.div`
  display: flex;
  margin-top: 32px;
  gap: 13px;
`;
SMbox.Logo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
  :hover {
    background-color: rgb(37, 60, 80);
  }
`;
export const LinkLogo = styled.img`
  margin-right: 26.6px;
  @media screen {
    width: 14px;
    height: 18px;
    text-align: center;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #0d263b;
  width: 100%;
  max-width: 1440px;
  padding: 0 130px;
  align-items: center;
  flex-wrap: wrap;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
`;

export const Left = styled.img`
  height: 36px;
`;
export const Right = styled.div`
  display: flex;
  align-items: center;
  width: 480px;
  justify-content: space-between;
  min-width: 300px;
  flex-wrap: wrap;
`;
Right.Text = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  size: 14px;
  line-height: 20px;
  color: #ffffff;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

Right.Button = styled.button`
  width: 45px;
  height: 45px;
  background: #0061df;
  border-radius: 3px;
  border: 1px solid transparent;
  cursor: pointer;
  margin: 12px;
  min-width: 45px;
`;
Right.Top = styled.img`
  width: 10px;
  height: 5.91px;
`;
