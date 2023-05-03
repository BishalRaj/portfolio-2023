import React from "react";
import "./style.scss";
import { Col, Row } from "react-bootstrap";
import { CiFolderOn } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

const PersonalProjects = () => {
  var projects = [];
  for (let index = 0; index < 14; index++) {
    projects.push(
      // <Col lg={4} className="bg-danger  px-1 py-2">
      <Col lg={4} className="  px-1 py-2">
        <div className="project-card p-4 mx-auto bg-light-navy">
          <Row className="h-100 d-flex justify-content-between">
            <Col lg={12} className="d-flex height-fit-content">
              <div className="w-50">
                <a href="/">
                  <CiFolderOn size={45} className="color-custom-green" />
                </a>
              </div>
              <div className="text-right w-50 d-flex align-items-end py-2 justify-content-end project-link">
                <a href="/" className="ml-1">
                  <FiGithub size={20} />
                </a>
                <a href="/" className="ml-1">
                  <FiGithub size={20} />
                </a>
              </div>
            </Col>
            <Col lg={12}>
              <h5 className="text-light">Title</h5>
              <p>definition</p>
            </Col>
            <Col lg={12} className="project-skills height-fit-content">
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
