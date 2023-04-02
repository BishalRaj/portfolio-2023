import React from "react";
import { Col, Row } from "react-bootstrap";
import "./style.scss";
const About = () => {
  return (
    <Row className=" d-flex justify-content-center align-items-center section-about">
      <Col lg={12}>
        <Row className="d-flex justify-content-center">
          <Col lg={5} className="bg-warning">
            Hello! My name is Bishal and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
            <br />
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients. <br />I also recently launched
            a course that covers everything you need to build a web app with the
            Spotify API using Node & React. <br /> Here are a few technologies
            I’ve been working with recently:
          </Col>
          <Col lg={3} className=" ">
            <div className="about-img-div">
              <img src="/images/me.jpg" alt="" className="" />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default About;
