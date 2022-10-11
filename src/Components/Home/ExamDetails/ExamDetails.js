import React from "react";
import { useLoaderData } from "react-router-dom";
import ExamQuestion from "./ExamQuestion/ExamQuestion";

const ExamDetails = () => {
  const examDetails = useLoaderData();
  const examQuestion = examDetails.data.questions;
  console.log(examQuestion);
  return (
    <div>
      <h3>Welcome to online examination sytem.</h3>
      <h6>Exam of {examDetails.data.name}</h6>
      {examQuestion.map((allQuestion, index) => (
        <ExamQuestion
          key={allQuestion.id}
          index={index}
          allQuestion={allQuestion}
        ></ExamQuestion>
      ))}
    </div>
  );
};

export default ExamDetails;
