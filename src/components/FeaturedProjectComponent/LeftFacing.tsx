import React, { Suspense } from "react";
import { Col, Row } from "react-bootstrap";
import { Bars } from "react-loading-icons";
const LeftFacing = ({ data, screenSize }: any) => {
  const { title, description, tools, image } = data;

  return (
    <Row className="ind-featured w-100">
      <Col
        lg={6}
        className="project-items  my-auto"
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
          {image ? (
            <Suspense fallback={<Bars />}>
              <img src={image} alt="" />
            </Suspense>
          ) : (
            <Suspense fallback={<Bars />}>
              <img
                src="https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg"
                alt=""
              />
            </Suspense>
          )}
        </Col>
      ) : (
        ""
      )}
    </Row>
  );
};

export default LeftFacing;
