import React from "react";
import { Btn, BtnGroup, BtnRow, Title } from "./style";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const goToSetA = () => {
    navigate("/seta");
  };

  const goToSetB = () => {
    navigate("/setb");
  };

  const goToSetTime = () => {
    navigate("/settime");
  };

  return (
    <>
      <Title>
        몸으로
        <br />
        말해요
      </Title>
      <BtnGroup>
        <BtnRow>
          <Btn color="#e29393" width="120px" height="120px" onClick={goToSetA}>
            A팀
          </Btn>
          <Btn color="#6e92d8" width="120px" height="120px" onClick={goToSetB}>
            B팀
          </Btn>
        </BtnRow>
        <Btn color="#a4a4a4" width="260px" height="120px" onClick={goToSetTime}>
          게임 시작
        </Btn>
      </BtnGroup>
    </>
  );
};

export default Main;
