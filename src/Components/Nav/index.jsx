import React from "react";
import { ReactComponent as PrevIco } from "../../Sources/svg/prev.svg";
import { Frame, IconDiv, Text } from "./style";
import { useNavigate } from "react-router-dom";

const Nav = (props) => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate(-1);
  };

  const doInit = () => {
    
    sessionStorage.clear(props.team);
  };

  return (
    <Frame>
      <IconDiv onClick={goMain}>
        <PrevIco width={"80%"} height={"60%"} />
      </IconDiv>
      <IconDiv onClick={props.team ? doInit : null}>
        <Text onClick={doInit}>{props.team ? "초기화" : ""}</Text>
      </IconDiv>
    </Frame>
  );
};

export default Nav;
