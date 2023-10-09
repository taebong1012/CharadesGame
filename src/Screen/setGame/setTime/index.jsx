import React, { useEffect, useState } from "react";
import {
  BlankWidth,
  Container,
  Content,
  TimeArea,
  Text,
  TimeSelect,
  Btn,
} from "./style";
import Nav from "../../../Components/Nav";
import Title from "../../../Components/Title";
import { useNavigate } from "react-router-dom";

const SetTime = () => {
  const [selectedMin, setSelectedMin] = useState(1);
  const [selectedSec, setSelectedSec] = useState(0);

  useEffect(() => {
    const min = JSON.parse(sessionStorage.getItem("min"));
    const sec = JSON.parse(sessionStorage.getItem("sec"));
    if (min && sec) {
    }
  }, []);

  const handleChangeMin = (e) => {
    setSelectedMin(e.target.value);
  };

  const handleChangeSec = (e) => {
    setSelectedSec(e.target.value);
  };

  const navigate = useNavigate();

  const handleClickNext = () => {
    sessionStorage.setItem("min", JSON.stringify(selectedMin));
    sessionStorage.setItem("sec", JSON.stringify(selectedSec));
    navigate("/setpass");
  };

  return (
    <Container>
      <Nav />
      <Content>
        <Title
          title="시간 설정"
          caption="얼만큼의 시간동안 게임을 진행할지 선택하세요."
        />
        <TimeArea>
          <TimeSelect onChange={handleChangeMin}>
            {Array.from({ length: 10 }, (_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </TimeSelect>
          <Text>분</Text>
          <BlankWidth />
          <TimeSelect onChange={handleChangeSec}>
            {Array.from({ length: 6 }, (_, index) => (
              <option key={index} value={10 * index}>
                {10 * index}
              </option>
            ))}
          </TimeSelect>
          <Text>초</Text>
        </TimeArea>
        <Btn onClick={handleClickNext}>다음</Btn>
      </Content>
    </Container>
  );
};

export default SetTime;
