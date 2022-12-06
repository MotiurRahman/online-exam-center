import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ExamQuestion from "./ExamQuestion/ExamQuestion";
import Toast from "react-bootstrap/Toast";

const ExamDetails = () => {
  const examDetails = useLoaderData();
  const examQuestion = examDetails.data.questions;
  const [showToast, setshowToast] = useState(true);
  const [message, setMessage] = useState("Start your exam");
  const showToastMessage = (message) => {
    if (message == null) {
      setshowToast(false);
    } else {
      setshowToast(true);
    }
    setMessage(message);
  };

  return (
    <div>
      <h3>Welcome to online examination sytem.</h3>
      <h6>Exam of {examDetails.data.name}</h6>
      <div className="sticky-top">
        <Toast show={showToast} onClose={() => showToastMessage(null)}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Online Exam System</strong>
          </Toast.Header>
          <Toast.Body>
            <h4
              className={message?.length == 22 ? "text-success" : "text-danger"}
            >
              {message}
            </h4>
          </Toast.Body>
        </Toast>
      </div>
      {examQuestion.map((allQuestion, index) => (
        <ExamQuestion
          key={allQuestion.id}
          index={index}
          allQuestion={allQuestion}
          showToastMessage={showToastMessage}
        ></ExamQuestion>
      ))}
    </div>
  );
};

export default ExamDetails;
