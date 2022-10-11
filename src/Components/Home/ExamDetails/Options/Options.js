import React from "react";
import { Col } from "react-bootstrap";

const Options = ({ option, correctAnswer, showToastMessage }) => {
  const handleOptionClick = (answer) => {
    if (correctAnswer === answer) {
      showToastMessage("Your Answer is Correct");
    } else {
      showToastMessage("Your Answer is Wrong");
    }
  };
  return (
    <Col xs={12} md={6}>
      <label
        onClick={() => handleOptionClick(option)}
        style={{ height: "80px", cursor: "pointer" }}
        className="border rounded border-primary mt-4 d-flex align-items-center p-1"
      >
        <input
          className="form-check-input mx-1"
          type="radio"
          name="flexRadioDefault"
        ></input>
        <p className="mb-0">{option}</p>
      </label>
    </Col>
  );
};

export default Options;
