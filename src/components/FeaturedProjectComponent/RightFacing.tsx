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
                <img src={image} alt={title} loading="lazy" />
              </a>
            </Suspense>
          ) : (
            <Suspense fallback={<Bars />}>
              <a href={link} target="_blank">
                <img
                  src="https://res.cloudinary.com/teepublic/image/private/s--K8c0zfiU--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1636059488/production/designs/25354873_0.jpg"
                  alt={title}
                  loading="lazy"
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
            <li key={x + "right"}>{x}</li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export default RightFacing;
