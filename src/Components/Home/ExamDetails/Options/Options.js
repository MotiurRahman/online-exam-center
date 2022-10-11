import React from "react";
import { Col } from "react-bootstrap";

const Options = ({ option, correctAnswer }) => {
  const handleOptionClick = (answer) => {
    if (correctAnswer === answer) {
      alert("This answer is correct");
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
          className="form-check-input ms-2"
          type="radio"
          name="flexRadioDefault"
        ></input>
        <p className="mb-0 ms-2">{option}</p>
      </label>
    </Col>
  );
};

export default Options;
