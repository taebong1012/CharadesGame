import React from "react";
import { Blank, Btn, BtnGroup, BtnRow, Title } from "./style";

const Main = () => {
  return (
    <>
      <Title>
        몸으로
        <br />
        말해요
      </Title>
      <BtnGroup>
        <BtnRow>
          <Btn color="#e29393" width="120px" height="120px">
            A팀
          </Btn>
          <Btn color="#6e92d8" width="120px" height="120px">
            B팀
          </Btn>
        </BtnRow>
        <Btn color="#a4a4a4" width="260px" height="120px">
          게임 시작
        </Btn>
      </BtnGroup>
    </>
  );
};

export default Main;
