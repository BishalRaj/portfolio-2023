import React from "react";
import { Col, Row } from "react-bootstrap";
import "./style.scss";

const Intro = () => {
  return (
    <Row className="justify-content-md-center section-intro">
      <Col lg={8} className="d-flex flex-column justify-content-center">
        <div>
          <h1>Hi, My name is</h1>
        </div>
        <div>
          <h2>Bishal Raj Shakya.</h2>
        </div>
        <div>
          <h3>I build things in the web.</h3>
        </div>
        <div className="w-50">
          <p className="color-slate">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Recently I graduated my
            Masters programme and would love to on build accessible,
            human-centered products.
          </p>
        </div>
        <button className="intro-button px-4 py-3">Check My Resume!</button>
      </Col>
    </Row>
  );
};

export default Intro;
