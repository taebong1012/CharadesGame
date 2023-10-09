import React from "react";
import { CaptionText, TitleText, Container } from "./style";

const Title = (props) => {
  return (
    <Container>
      <TitleText>{props.title}</TitleText>
      <CaptionText>{props.caption}</CaptionText>
    </Container>
  );
};

export default Title;
