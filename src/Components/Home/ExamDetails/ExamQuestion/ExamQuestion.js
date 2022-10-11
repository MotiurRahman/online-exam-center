import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import { Container, Row } from "react-bootstrap";
import Options from "../Options/Options";
import "./ExamQuetions.css";

const ExamQuestion = ({ allQuestion, index, showToastMessage }) => {
  const { options, id, question, correctAnswer } = allQuestion;
  const chekcCorrectAnswer = () => {
    alert("Correct Answer is: " + correctAnswer);
  };
  return (
    <div className="my-5 mx-auto examquestion">
      <div className="d-flex justify-content-between">
        <h6>
          Que {index}:{question}
        </h6>
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          onClick={chekcCorrectAnswer}
          icon={faEye}
        />
      </div>
      <Container className="mt-4">
        <Row>
          {options.map((option, index) => (
            <Options
              key={index}
              correctAnswer={correctAnswer}
              option={option}
              showToastMessage={showToastMessage}
            ></Options>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ExamQuestion;
