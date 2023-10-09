import React from "react";
import { ReactComponent as PrevIco } from "../../Sources/svg/prev.svg";
import { Frame, IconDiv, Text } from "./style";
import { useNavigate } from "react-router-dom";

const Nav = (props) => {
  const navigate = useNavigate();

  const goPrev = () => {
    navigate(-1);
  };

  const doInit = () => {
    const userConfirmed = window.confirm(
      "이 작업은 되돌릴 수 없습니다. 초기화 하시겠습니까?"
    );
    if (userConfirmed) {
      sessionStorage.removeItem(props.team);
      window.location.reload();
    }
  };

  return (
    <Frame>
      <IconDiv onClick={goPrev}>
        <PrevIco width={"80%"} height={"60%"} />
      </IconDiv>
      <IconDiv onClick={props.team ? doInit : null}>
        <Text>{props.team ? "초기화" : ""}</Text>
      </IconDiv>
    </Frame>
  );
};

export default Nav;
