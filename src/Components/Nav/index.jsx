import React from "react";
import { ReactComponent as PrevIco } from "../../Sources/svg/prev.svg";
import { Frame, IconDiv } from "./style";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate(-1);
  };

  return (
    <Frame>
      <IconDiv>
        <PrevIco width={"80%"} height={"60%"} onClick={goMain} />
      </IconDiv>
    </Frame>
  );
};

export default Nav;
