import React, { Suspense } from "react";
import { Col, Row } from "react-bootstrap";
import { Bars } from "react-loading-icons";

const RightFacing = ({ data, screenSize }: any) => {
  const { title, description, tools, image, link } = data;

  return (
    <Row className="ind-featured">
      {screenSize > 428 ? (
        <Col lg={6} className="grey-scale-img-div featured-img-div">
          {image ? (
            <Suspense fallback={<Bars />}>
              <a href={link} target="_blank">
                <img src={image} alt="" />
              </a>
            </Suspense>
          ) : (
            <Suspense fallback={<Bars />}>
              <a href={link} target="_blank">
                <img
                  src="https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg"
                  alt=""
                />
              </a>
            </Suspense>
          )}
        </Col>
      ) : (
        ""
      )}
      <Col
        lg={6}
        className="project-items my-auto"
        style={{ textAlign: "right" }}
      >
        <h1 className="color-custom-green">Featured Project</h1>
        <h2 className="color-slate-lightest">{title}</h2>
        <div className="fp-desc">{description}</div>
        <ul>
          {tools.map((x: String) => (
            <li>{x}</li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export default RightFacing;
