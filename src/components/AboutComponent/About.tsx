import React from "react";
import { Col, Row } from "react-bootstrap";
import "./style.scss";
const About = ({ ref }: any) => {
  return (
    <Row
      className=" d-flex justify-content-center align-items-center section-about"
      id="about"
      ref={ref}
    >
      <Col lg={12}>
        <Row className="d-flex justify-content-center about-sans mx-auto">
          <Col lg={5} md={12} sm={12}>
            <p className="section-title">
              <span>01.</span> About Me
              <span className="horizontal-line"></span>
            </p>

            <p>
              I am a forward-thinking software engineer with 2 years of
              experience building clean and scalable web applications using
              JavaScript (React | Node). I am a seasoned professional with a
              background in Full Stack lifecycle and have quickly learned and
              mastered new technologies while working on both team and
              self-directed goals.
            </p>
            <p>
              I have experience working on various projects, including "
              <a>My IT Enabler</a>" and "<a>Flash Sale Nepal</a>" at Gurung
              Tech, and "Report Manager", "<a>Terakoya</a>" and "<a>YouMe</a>"
              landing pages at <a>Terakoya Academia</a>. I hold an MSc in
              Computer Science from Coventry University and a BSc in Computing
              from the same institution.
            </p>
            <p>
              I am familiar with tools like SonarQube, Git, Microsoft SQL
              Server, and React Developer Tools.
            </p>
            <p>
              Here are a few technologies I’ve been working with recently:
              <ul className="skills-grid px-0">
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Java (SpringBoot)</li>
                <li>Node.js</li>
                <li>Express</li>
              </ul>
            </p>
          </Col>
          <Col lg={3} className="my-auto">
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
