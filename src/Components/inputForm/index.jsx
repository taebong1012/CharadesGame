import React, { useEffect, useState } from "react";
import {
  Input,
  InputGroup,
  InputRow,
  Num,
  SubmitBtn,
} from "../../Screen/setGame/setA/style";

const InputForm = (props) => {
  const [inputValues, setInputValues] = useState(Array(20).fill(""));
  const [isAllInput, setIsAllInput] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(sessionStorage.getItem(props.team));
    if (storedData && storedData.length === 20) {
      setInputValues(storedData);
    }
  }, []);

  useEffect(() => {
    if (inputValues.every((value) => value !== "")) {
      setIsAllInput(true);
    } else {
      setIsAllInput(false);
    }
  }, inputValues);

  const handleChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const handleSubmit = () => {
    if (inputValues.every((value) => value !== "")) {
      sessionStorage.setItem(props.team, JSON.stringify(inputValues));
      alert("저장되었습니다.");
    } else {
      alert("모든 입력란을 채워주세요.");
    }
  };

  return (
    <InputGroup>
      {inputValues.map((value, index) => (
        <InputRow>
          <Num>{index + 1}.</Num>
          <Input
            key={index}
            type="text"
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        </InputRow>
      ))}
      <SubmitBtn onClick={handleSubmit} disabled={!isAllInput}>
        입력 완료
      </SubmitBtn>
    </InputGroup>
  );
};

export default InputForm;
