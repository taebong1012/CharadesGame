import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TimerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  padding-top: 10%;
`;

export const Time = styled.p`
  font-family: "LINE700";
  font-size: 2rem;
  color: #ff8a00;
  margin-left: 0.125rem;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
  font-family: "LINE700";
  font-size: 10rem;
`;

export const Text = styled.p`
  white-space: nowrap;
  overflow: hidden;
  font-size: calc((100vw) / ${(props) => props.length});
`;

export const ButtonDiv = styled.div`
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Btn = styled.button`
  border: none;
  border-radius: 10px;
  width: ${(props) => (props.width ? props.width : "8.75rem")};
  height: 60%;
  margin: 0.625rem;
  background-color: ${(props) =>
    !props.disabled || props.width ? props.color : "#D8D8D8"};
  font-size: 1.5rem;
  font-family: "LINE700";
`;
