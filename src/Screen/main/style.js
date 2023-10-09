import styled from "styled-components";

export const Title = styled.div`
  font-family: "LINE700";
  font-size: 3.125rem;
  margin-top: 6.25rem;
  margin-bottom: 3.125rem;
  text-align: center;
`;

export const BtnGroup = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BtnRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Btn = styled.button`
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "LINE400";
  color: white;
  font-size: 1.25rem;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));
  border: 2px solid transparent;
  outline: none;

  &:active {
    border-color: ${(props) => props.color};
    border-width: 2px;
    background-color: white;
    color: ${(props) => props.color};
    filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.25));
  }
`;

export const Blank = styled.div`
  height: 100px;
`;
