import React from "react";
import { Col, Row } from "react-bootstrap";

const RightFacing = ({ data, screenSize }: any) => {
  const { title, description, tools, image } = data;

  return (
    <Row className="ind-featured">
      {screenSize > 428 ? (
        <Col lg={6} className="grey-scale-img-div featured-img-div">
          <img
            src="https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg"
            alt=""
          />
        </Col>
      ) : (
        ""
      )}
      <Col
        lg={6}
        className="project-items project-skills my-auto"
        style={{ textAlign: "right" }}
      >
        <h1>Featured Project</h1>
        <h2>{title}</h2>
        <div className="fp-desc">{description}</div>
        <ul>
          {tools.map((x: String) => (
            <li>{data}</li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export default RightFacing;
