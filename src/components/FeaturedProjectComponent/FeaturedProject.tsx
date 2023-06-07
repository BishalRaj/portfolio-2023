import React from "react";
import { Col, Row } from "react-bootstrap";
import "./style.scss";
// import portfolio from "../../assets/images/featured/portfolio1.png";
import project from "../../data/featuredProject.json";
import LeftFacing from "./LeftFacing";
import RightFacing from "./RightFacing";
import { Fade } from "react-reveal";
const FeaturedProject = ({ screenSize }: any) => {
  const projects: any = [];

  for (let index = 0; index < project.length; index++) {
    projects.push(
      <Col lg={8} sm={12} className="mx-auto my-5">
        <Fade>
          {index % 2 == 0 ? (
            <LeftFacing data={project[index]} screenSize={screenSize} />
          ) : (
            <RightFacing data={project[index]} screenSize={screenSize} />
          )}
        </Fade>
      </Col>
    );
  }
  return (
    <Row className="section-featured min-h-100vh mb-5">
      <Col lg={8} sm={12} className="mx-auto">
        <p className="section-title mb-4">
          <span>03.</span> Some Things I've Built
          <span className="horizontal-line"></span>
        </p>
      </Col>
      {projects}
    </Row>
  );
};

export default FeaturedProject;
