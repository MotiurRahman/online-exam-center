import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import "./Home.css";
import Topic from "./Topic/Topic";

const Home = () => {
  const examTopic = useLoaderData();
  const topics = examTopic.data;

  return (
    <div>
      <header className="headerView text-white">
        <h3>Online Exam System</h3>
        <p>Now the exam is fun do it anytime anywhere even open book.</p>
      </header>
      <main className="mt-5">
        <Row>
          {topics.map((topic) => (
            <Topic key={topic.id} topic={topic}></Topic>
          ))}
        </Row>
      </main>
    </div>
  );
};

export default Home;
