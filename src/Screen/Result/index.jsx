import React, { useEffect, useState } from "react";
import Nav from "../../Components/Nav";
import {
  Container,
  Content,
  WinLoseGroup,
  Semititle,
  WinLose,
  Line,
  TeamName,
  Info,
  Answer,
  Correct,
  Num,
} from "./style";
import Title from "../../Components/Title";

const Result = () => {
  const aAnswer = JSON.parse(sessionStorage.getItem("aanswer"));
  const bAnswer = JSON.parse(sessionStorage.getItem("banswer"));
  const aResult = JSON.parse(sessionStorage.getItem("aresult"));
  const bResult = JSON.parse(sessionStorage.getItem("bresult"));
  const [aScore, setaScore] = useState(0);
  const [bScore, setbScore] = useState(0);
  const [isDraw, setIsDraw] = useState(false);
  const [winner, setWinner] = useState("A");
  const [loser, setLoser] = useState("B");
  const [isShowWinner, setisShowWinner] = useState(true);

  useEffect(() => {
    let cnt = 0;
    aResult.forEach((element) => {
      if (element === "O") cnt++;
    });
    setaScore(cnt);

    cnt = 0;
    bResult.forEach((element) => {
      if (element === "O") cnt++;
    });
    setbScore(cnt);
  }, []);

  useEffect(() => {
    if (aScore === bScore) {
      setIsDraw(true);
    } else if (bScore > aScore) {
      setWinner("B");
      setLoser("A");
      setIsDraw(false);
    } else {
      setWinner("A");
      setLoser("B");
      setIsDraw(false);
    }
  }, [aScore, bScore]);

  const clickWinner = () => {
    setisShowWinner(true);
  };

  const clickLoser = () => {
    setisShowWinner(false);
  };

  const [showAnswer, setShowAnswer] = useState([]);
  const [showResult, setShowResult] = useState([]);

  useEffect(() => {
    if ((isShowWinner && winner == "A") || (!isShowWinner && winner == "B")) {
      setShowAnswer(aAnswer);
      setShowResult(aResult);
    } else if (
      (isShowWinner && winner == "B") ||
      (!isShowWinner && winner == "A")
    ) {
      setShowAnswer(bAnswer);
      setShowResult(bResult);
    }
  }, [isShowWinner, winner]);

  const Answers = () => {
    const infoElements = [];

    for (let i = 0; i < 20; i++) {
      if (showAnswer[i]) {
        infoElements.push(
          <Info key={i}>
            <Num>{i + 1}</Num>
            <Answer>{showAnswer[i]}</Answer>
            <Correct>{showResult[i]}</Correct>
          </Info>
        );
      }
    }

    return infoElements;
  };

  return (
    <Container>
      <Nav />
      <Content>
        <Title
          title="게임 결과"
          caption="팀을 누르면 정답들을 확인할 수 있어요."
        />
        <WinLoseGroup>
          <WinLose onClick={clickWinner} isShowWinner={isShowWinner}>
            <Semititle>{isDraw ? "DRAW" : "WIN"}</Semititle>
            <TeamName>{winner}</TeamName>
          </WinLose>
          <WinLose onClick={clickLoser} isShowWinner={!isShowWinner}>
            <Semititle>{isDraw ? "DRAW" : "LOSE"}</Semititle>
            <TeamName>{loser}</TeamName>
          </WinLose>
        </WinLoseGroup>

        <Info title={1}>
          <Num>번호</Num>
          <Answer>정답</Answer>
          <Correct>O/X</Correct>
        </Info>
        <Line />
        <Answers />
      </Content>
    </Container>
  );
};

export default Result;
