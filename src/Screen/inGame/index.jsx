import React, { useEffect, useState } from "react";
import {
  Container,
  TimerDiv,
  Time,
  Inner,
  Blank,
  ButtonDiv,
  Text,
  Btn,
} from "./style";
import { ReactComponent as Timer } from "../../Sources/svg/timer.svg";
import { ReactComponent as TimerStart } from "../../Sources/svg/timerstart.svg";
import { useNavigate } from "react-router-dom";

const Ingame = () => {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [curTeam, setCurTeam] = useState("A");
  const [texts, setTexts] = useState(JSON.parse(sessionStorage.getItem("a")));
  const [isFinished, setIsFinished] = useState(false);
  const [randomNum, setRandomNum] = useState([]);
  const [curIndex, setCurIndex] = useState(0);

  useEffect(() => {
    setMin(parseInt(sessionStorage.getItem("min")));
    setSec(parseInt(sessionStorage.getItem("sec")));
    getRandomNum();
  }, []);

  useEffect(() => {
    if (isStart) {
      const interval = setInterval(() => {
        if (min === 0 && sec === 0) {
          clearInterval(interval);
          setIsStart(false);
          if (curTeam === "A") {
            bTurn();
          } else {
            setIsStart(false);
            setIsFinished(true);
          }
        } else {
          if (sec === 0) {
            setMin((prevMinutes) => prevMinutes - 1);
            setSec(59);
          } else {
            setSec((prevSeconds) => prevSeconds - 1);
          }
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [min, sec, isStart]);

  useEffect(() => {
    if (curIndex === 20) {
      if (curTeam === "A") {
        bTurn();
      } else {
        setIsStart(false);
        setIsFinished(true);
      }
    }
  }, [curIndex]);

  const bTurn = () => {
    setIsStart(false);
    setMin(parseInt(sessionStorage.getItem("min")));
    setSec(parseInt(sessionStorage.getItem("sec")));

    setCurTeam("B");
    const bTexts = JSON.parse(sessionStorage.getItem("b"));
    setTexts(bTexts);
    setCurIndex(0);
  };

  const handleChangeIsStart = () => {
    setIsStart(true);
  };

  const getRandomNum = () => {
    const numbers = Array.from({ length: 20 }, (_, i) => i);

    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    setRandomNum((prevRandom) => [...prevRandom, ...numbers.slice(0)]);
  };

  const indexIncrease = () => {
    setCurIndex(curIndex + 1);
  };

  const handleOnClickAnswer = () => {
    indexIncrease();
  };

  const handleOnClickPass = () => {
    indexIncrease();
  };

  const navigate = useNavigate();
  const goToResult = () => {
    navigate("/result");
  };

  const Content = () => {
    if (!isStart) {
      if (!isFinished) {
        return (
          <Inner>
            <TimerStart
              width={"30%"}
              height={"30%"}
              onClick={handleChangeIsStart}
            />
          </Inner>
        );
      } else {
        return (
          <Inner>
            <Btn width="60%" color="#FF8A00" onClick={goToResult}>
              결과 보기
            </Btn>
          </Inner>
        );
      }
    } else {
      return (
        <Inner>
          <Text length={texts[randomNum[curIndex]].length}>
            {texts[randomNum[curIndex]]}
          </Text>
        </Inner>
      );
    }
  };

  return (
    <Container>
      <TimerDiv>
        <Timer width={"32px"} height={"32px"} />
        <Time>
          {min.toString().padStart(2, "0")}:{sec.toString().padStart(2, "0")}
        </Time>
      </TimerDiv>

      <Content />

      <ButtonDiv>
        <Btn onClick={handleOnClickAnswer} color="#FF8A00" disabled={!isStart}>
          정답
        </Btn>
        <Btn onClick={handleOnClickPass} color="#FEF0EE" disabled={!isStart}>
          Pass
        </Btn>
      </ButtonDiv>
    </Container>
  );
};

export default Ingame;
