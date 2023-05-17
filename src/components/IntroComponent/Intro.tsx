import React from "react";
import { Col, Row } from "react-bootstrap";
import "./style.scss";
import { Link } from "react-router-dom";
import cv from "../../assets/Resume-Bishal-Shakya.pdf";
const Intro = () => {
  return (
    <Row className="justify-content-md-center section-intro" id="intro">
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
        <div className="my-4 intro-description">
          <p className="color-slate">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. I would love to build
            accessible, human-centered products.
          </p>
        </div>
        <Link
          to={cv}
          target="_blank"
          className="glow-button px-4 py-3"
          download
        >
          Check My Resume!
        </Link>

        {/* <button className="glow-button px-4 py-3">Check My Resume!</button> */}
      </Col>
    </Row>
  );
};

export default Intro;
