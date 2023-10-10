import React, { useEffect, useState } from "react";
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

  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const aTexts = sessionStorage.getItem("a");
    const bTexts = sessionStorage.getItem("b");

    if (aTexts && bTexts) {
      setIsReady(true);
    }
  }, []);

  return (
    <>
      <Title>
        몸으로
        <br />
        말해요
      </Title>
      <BtnGroup>
        <BtnRow>
          <Btn
            disabled={false}
            color="#FFD7B2"
            width="120px"
            height="120px"
            onClick={goToSetA}
          >
            A팀
          </Btn>
          <Btn
            disabled={false}
            color="#FFD7B2"
            width="120px"
            height="120px"
            onClick={goToSetB}
          >
            B팀
          </Btn>
        </BtnRow>
        <Btn
          disabled={!isReady}
          color="#FF8A00"
          width="260px"
          height="120px"
          onClick={goToSetTime}
        >
          {isReady ? "게임 시작" : "단어 입력을 완료해주세요."}
        </Btn>
      </BtnGroup>
    </>
  );
};

export default Main;
