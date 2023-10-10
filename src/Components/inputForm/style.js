import styled from "styled-components";

export const Title = styled.div`
  font-family: "LINE700";
  margin: 2.5rem 0;
  font-size: 1.5rem;
  text-align: center;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputRow = styled.div`
  display: flex;
  margin: 8px 0;
  width: 100%;
`;

export const Num = styled.div`
  margin-right: 0.5rem;
  width: 10%;
  height: 2rem;
  font-size: 1.125rem;
  display: flex;
  align-items: end;
  justify-content: end;
  font-family: "LINE400";
`;

export const Input = styled.input`
  height: 3rem;
  width: 14rem;
  font-size: 1.125rem;
  font-family: "LINE100";
  padding: 0.625rem;
  border: none;
  background-color: #f2f3f5;
  border-radius: 10px;
  width: 90%;

  &:focus {
    outline: none;
  }
`;

export const SubmitBtn = styled.button`
  margin-top: 20px;
  margin-bottom: 50px;
  background-color: ${(props) => (props.disabled ? "#ADB3BA" : "#ff8a00")};
  color: white;
  height: 3rem;
  border: none;
  border-radius: 10px;
  width: 100%;
`;
