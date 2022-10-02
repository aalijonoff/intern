import React from "react";
import Input from "../Generic/Input";
import { Container, Wrapper } from "./style";

export const LogIn = () => {
  return (
    <Wrapper>
      <Container>
        <Input
          width={"520px"}
          type={"text"}
          height={"50px"}
          placeholder={"something@*mail.com"}
        />
        <Input
          width={"520px"}
          type={"password"}
          height={"50px"}
          placeholder={"Password"}
        />
      </Container>
    </Wrapper>
  );
};
