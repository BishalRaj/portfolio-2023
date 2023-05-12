import React from "react";
import VerticalTabs from "./VerticalTabs";
import { Col, Row } from "react-bootstrap";
import "./style.scss";

const Work = ({ ref }: any) => {
  return (
    <Row ref={ref} className="section-work d-flex align-items-center">
      <Col lg={6} className="mx-auto">
        <h1>Where I've worked</h1>
        <VerticalTabs />
      </Col>
    </Row>
  );
};

export default Work;
