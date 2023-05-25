import React from "react";
import { Col, Row } from "react-bootstrap";

const LeftFacing = ({ data, screenSize }: any) => {
  const { title, description, tools, image } = data;
  console.log("====================================");
  console.log(data);
  console.log("====================================");
  return (
    <Row className="ind-featured">
      <Col
        lg={6}
        className="project-items project-skills my-auto"
        style={{
          textAlign: "left",
          // background: url(`${screenSize > 428 ? "" : ""}`),
        }}
      >
        <h1>Featured Project</h1>
        <h2>{title}</h2>
        <div className="fp-desc">{description}</div>
        <ul>
          {tools.map((x: String) => (
            <li>{x}</li>
          ))}
        </ul>
      </Col>
      {screenSize > 428 ? (
        <Col
          lg={6}
          className="grey-scale-img-div featured-img-div img-div-left"
        >
          <img src={image} alt="" />
        </Col>
      ) : (
        ""
      )}
    </Row>
  );
};

export default LeftFacing;
