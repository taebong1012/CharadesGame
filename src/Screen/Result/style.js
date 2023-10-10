import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

export const Content = styled.div`
  padding: 0 1.875rem;
`;

export const WinLoseGroup = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
`;

export const WinLose = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc((100% - 8px) / 2);
  margin: 0 2px;
  border-radius: 10px;
  background-color: ${(props) => (props.isShowWinner ? "#FEF0EE" : "none")};
`;

export const Semititle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40%;
`;

export const TeamName = styled.div`
  font-family: "LINE700";
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60%;
`;

export const Line = styled.div`
  width: 100%;
  border: 0.5px solid #adb3ba;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 10px 0;
  font-family: ${(props) => (props.title ? "LINE700" : "LINE100")};
`;

export const Num = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
`;

export const Answer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  font-family: "LINE400";
`;

export const Correct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  font-family: "LINE400";
`;
