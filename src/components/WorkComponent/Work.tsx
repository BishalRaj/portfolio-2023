import React from "react";
import VerticalTabs from "./VerticalTabs";
import { Col, Row } from "react-bootstrap";
import "./style.scss";
import HorizontalTabs from "./HorizontalTabs";

const Work = ({ ref }: any) => {
  return (
    <Row ref={ref} className="section-work d-flex align-items-center">
      <Col lg={6} sm={12} className="mx-auto">
        <p className="section-title mb-4">
          <span>02.</span> Where I've worked
          <span className="horizontal-line"></span>
        </p>
        <VerticalTabs />
      </Col>
      <Col lg={12} sm={12} className="mx-auto">
        <p className="section-title mb-4">
          <span>02.</span> Where I've worked
          <span className="horizontal-line"></span>
        </p>

        <HorizontalTabs />
      </Col>
    </Row>
  );
};

export default Work;
