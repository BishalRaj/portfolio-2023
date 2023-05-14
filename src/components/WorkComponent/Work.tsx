import React, { useState, useEffect } from "react";
import VerticalTabs from "./VerticalTabs";
import { Col, Row } from "react-bootstrap";
import "./style.scss";
import HorizontalTabs from "./HorizontalTabs";

const Work = ({ screenSize }: any) => {
  return (
    <Row className="section-work d-flex align-items-center">
      <Col lg={6} sm={12} className="mx-auto">
        <p className="section-title mb-4 experience">
          <span>02.</span> Where I've worked
          <span className="horizontal-line"></span>
        </p>
        {screenSize > 428 ? <VerticalTabs /> : <HorizontalTabs />}
      </Col>
    </Row>
  );
};

export default Work;
