import { Col, Row } from "react-bootstrap";
import { CiFolderOn } from "react-icons/ci";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import ProjectData from "../../data/projects.json";
import "./style.scss";
import { Fade } from "react-reveal";

const PersonalProjects = ({ screenSize }: any) => {
  var projects = ProjectData.map((data) => {
    return (
      <Col
        lg={4}
        sm={12}
        className="px-1 py-2  personalProject"
        id="personalProject"
        key={data.title + "personal"}
      >
        <div
          // to={data.github ? data.github : "#"}
          // target="_blank"
          className="project-link"
        >
          <Fade bottom>
            <div className={`project-card mx-auto bg-light-navy p-4`}>
              <Row className="h-100 d-flex justify-content-between">
                {/* Column links ******************************************************************************** */}
                <Col lg={12} className="d-flex height-fit-content">
                  <div className="w-50">
                    <a href={data.link}>
                      <CiFolderOn size={45} className="color-custom-green" />
                    </a>
                  </div>
                  <div className="text-right w-50 d-flex align-items-end py-2 justify-content-end repo-link">
                    {data.github ? (
                      <a href={data.github} target="_blank" className="ml-1">
                        <FiGithub size={20} />
                      </a>
                    ) : (
                      ""
                    )}
                    {data.link ? (
                      <a href={data.link} target="_blank" className="ml-1">
                        <FiExternalLink size={20} />
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </Col>
                {/* ---------------------------------------------------------------------------------------------- */}
                <Col lg={12}>
                  <h5 className="color-slate-lightest project-title">
                    {data.title}
                  </h5>
                  <p className="color-slate-light">{data.description}</p>
                </Col>
                <Col
                  lg={12}
                  className="project-skills height-fit-content w-100"
                >
                  <ul>
                    {data.technologies.map((element) => (
                      <li
                        style={{ marginRight: "5%" }}
                        key={element + "personal"}
                      >
                        {element}
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </div>
          </Fade>
        </div>
      </Col>
    );
  });

  return (
    <Row className="section-personal-project mx-auto d-flex justify-content-center">
      <div className="w-100 text-center">
        <p className="section-title mx-auto">Other Noteworthy Projects</p>
        <h1>View Archive</h1>
      </div>
      {projects}
    </Row>
  );
};

export default PersonalProjects;
