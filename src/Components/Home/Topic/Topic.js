import React from "react";
import { Col } from "react-bootstrap";

const Topic = ({ topic }) => {
  const { id, logo, name, total } = topic;
  return (
    <Col className="mt-3">
      <img className="img-fluid bg-dark" src={logo} alt="" />
      <div className="d-flex justify-content-between m-3 align-items-center">
        <p>
          <b>Name: </b>
          {name}({total})
        </p>
        <button className="btn btn-success">Start Exam</button>
      </div>
    </Col>
  );
};

export default Topic;
