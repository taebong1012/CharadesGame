import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

export const Content = styled.div`
  padding: 0 1.875rem;
`;

export const BlankWidth = styled.div`
  width: 10px;
`;

export const TimeSelect = styled.select`
  width: 80px;
  height: 50px;
  text-align: center;
  border: none;
  background-color: #f2f3f5;
  border-radius: 10px;
  padding: 4px;
  font-size: 1rem;
  font-family: "LINE400";
`;

export const Text = styled.div`
  margin: 0 0.5rem;
  font-size: 1.2rem;
`;

export const TimeArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18.75rem;
`;

export const Btn = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #ff8a00;
  color: white;
  height: 3rem;
  width: calc(100% - 2.5rem);
  border: none;
  border-radius: 10px;
  position: fixed;
  bottom: 0%;
`;
