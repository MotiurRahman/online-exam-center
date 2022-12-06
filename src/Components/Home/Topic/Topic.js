import React from "react";
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Topics.css";

const Topic = ({ topic }) => {
  const { id, logo, name, total } = topic;
  return (
    <Col xs={12} md={6} lg={3} className="mt-3">
      <img className="img-fluid bg-dark" src={logo} alt="" />
      <div className="d-flex justify-content-between m-3 align-items-center">
        <p>
          <b>Name: </b>
          {name}({total})
        </p>
        <Button variant="primary">
          <Link className="btnStart" to={`api/online-exam/${id}`}>
            Start Exam
          </Link>
        </Button>
      </div>
    </Col>
  );
};

export default Topic;
