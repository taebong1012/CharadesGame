import React from "react";
import InputForm from "../../../Components/inputForm";
import Nav from "../../../Components/Nav";
import { Container, Content } from "./style";
import Title from "../../../Components/Title";

const Seta = () => {
  return (
    <Container>
      <Nav team="a" />
      <Content>
        <Title title="A팀 제시어" caption="B팀을 공격할 단어를 입력하세요." />
        <InputForm team="a" />
      </Content>
    </Container>
  );
};

export default Seta;
