import React from "react";
import "./style.scss";
import { Col, Row } from "react-bootstrap";
import { AiOutlineFolder } from "react-icons/ai";

const PersonalProjects = () => {
  var projects = [];
  for (let index = 0; index < 14; index++) {
    projects.push(
      <Col lg={4} className="bg-danger  px-1 py-2">
        <div className="project-card p-4 mx-auto bg-light ">
          <Row className="h-100 d-flex justify-content-between">
            <Col lg={6}>
              <a href="/">
                <AiOutlineFolder size={45} />
              </a>
            </Col>
            <Col lg={6} className="text-right">
              link
            </Col>
            <Col lg={12}>
              <h2>title</h2>
              <p>definition</p>
            </Col>
            <Col lg={12} className="project-skills">
              <ul>
                <li>react.js</li>
                <li>react.js</li>
                <li>react.js</li>
              </ul>
            </Col>
          </Row>
        </div>
      </Col>
    );
  }

  return (
    <Row className="section-personal-project mx-auto d-flex justify-content-center">
      <div className="w-100 text-center">
        <p>Other Noteworthy Projects</p>
        <h1>View Archive</h1>
      </div>
      {projects}
    </Row>
  );
};

export default PersonalProjects;
