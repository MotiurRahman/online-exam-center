import React from "react";
import { Col } from "react-bootstrap";

const Options = ({ option }) => {
  return (
    <Col xs={12} md={6}>
      <div
        style={{ height: "80px" }}
        className="border rounded border-primary mt-4 d-flex align-items-center p-1"
      >
        <input
          className="form-check-input ms-2"
          type="radio"
          name="flexRadioDefault"
        ></input>
        <p className="mb-0 ms-2">{option}</p>
      </div>
    </Col>
  );
};

export default Options;
