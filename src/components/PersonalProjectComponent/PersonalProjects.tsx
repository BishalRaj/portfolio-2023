import React from "react";
import "./style.scss";
import { Col, Row } from "react-bootstrap";

const PersonalProjects = () => {
  var projects = [];
  for (let index = 0; index < 14; index++) {
    projects.push(
      <Col lg={4} className="bg-danger  px-1 py-2">
        <div className="project-card p-4 mx-auto bg-light ">
          <Row className="h-100 d-flex justify-content-between">
            <Col lg={6}>Github</Col>{" "}
            <Col lg={6} className="text-right">
              link
            </Col>
            <Col lg={12}>
              <h2>title</h2>
              <p>definition</p>
            </Col>
            <Col lg={12}>languages</Col>
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
