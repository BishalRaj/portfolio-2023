import React from "react";
import { Col, Row } from "react-bootstrap";
import "./style.scss";
const About = () => {
  return (
    <Row className=" d-flex justify-content-center align-items-center section-about">
      <Col lg={12}>
        <Row className="d-flex justify-content-center px-5">
          <Col lg={5} className="about-sans px-5">
            <h1>About Me</h1>

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
              <ul className="skills-grid">
                <li>Java</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Git</li>
                <li>HTML</li>
                <li>CSS</li>
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
