import styled from "styled-components";

export const Frame = styled.div`
  height: 2.625rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  margin-top: 0.625rem;
`;

export const IconDiv = styled.button`
  height: 2rem;
  width: ${(props) => (props.width ? props.width : "none")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1px;
  border-radius: 5px;
  background-color: transparent;
  border: none;

  &:active {
    background-color: #fef0ee;
  }
`;

export const Text = styled.p`
  font-family: "LINE400";
  color: #bdbab5;
`;
