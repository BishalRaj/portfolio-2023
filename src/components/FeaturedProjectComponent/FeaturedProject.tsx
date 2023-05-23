import React from "react";
import { Col, Row } from "react-bootstrap";
import "./style.scss";

const FeaturedProject = ({ screenSize }: any) => {
  const projects: any = [];
  for (let index = 0; index < 5; index++) {
    projects.push(
      <Col lg={8} sm={12} className="mx-auto my-5">
        {index % 2 == 0 ? (
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
              <h2>Title</h2>
              <div className="fp-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vitae magna velit. Phasellus mauris sapien, mollis ut dapibus
                ut, porttitor vel lacus. Nam ac elementum dolor, ac laoreet
                nisi. Vestibulum ultricies sodales elit a dapibus. Proin arcu
                lorem, tincidunt in aliquet a, finibus sit amet enim.
                Suspendisse efficitur eros ligula.
              </div>
              <ul>
                <li>VS Code</li>
                <li>React</li>
                <li>FastAPI</li>
              </ul>
            </Col>
            {screenSize > 428 ? (
              <Col
                lg={6}
                className="grey-scale-img-div featured-img-div img-div-left"
              >
                <img
                  src="https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg"
                  alt=""
                />
              </Col>
            ) : (
              ""
            )}
          </Row>
        ) : (
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
              <h2>Title</h2>
              <div className="fp-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vitae magna velit. Phasellus mauris sapien, mollis ut dapibus
                ut, porttitor vel lacus. Nam ac elementum dolor, ac laoreet
                nisi. Vestibulum ultricies sodales elit a dapibus. Proin arcu
                lorem, tincidunt in aliquet a, finibus sit amet enim.
                Suspendisse efficitur eros ligula.
              </div>
              <ul>
                <li>VS Code</li>
                <li>React</li>
                <li>FastAPI</li>
              </ul>
            </Col>
          </Row>
        )}
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
