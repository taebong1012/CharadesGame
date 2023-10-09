import React, { useState } from "react";
import { Btn, Container, Content, PassArea, PassSelect, Text } from "./style";
import Nav from "../../../Components/Nav";
import Title from "../../../Components/Title";
import { useNavigate } from "react-router-dom";

const SetPass = () => {
  const [pass, setPass] = useState(0);
  const handleChangePass = (e) => {
    setPass(e.target.value);
  };

  const navigate = useNavigate();
  const handleClickNext = () => {
    sessionStorage.setItem("pass", pass);
    navigate("/ingame");
  };

  return (
    <Container>
      <Nav />
      <Content>
        <Title
          title="Pass 개수 설정"
          caption="제시어를 넘길 수 있는 횟수를 선택하세요."
        />
        <PassArea>
          <PassSelect onChange={handleChangePass}>
            {Array.from({ length: 11 }, (_, index) => (
              <option key={index} value={index}>
                {index}
              </option>
            ))}
          </PassSelect>
          <Text>개</Text>
        </PassArea>
        <Btn onClick={handleClickNext}>다음</Btn>
      </Content>
    </Container>
  );
};

export default SetPass;
