import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// For my Projects
import cauio from "../../Assets/Projects/caiuo.png";
import acresite from "../../Assets/Projects/acresite.png";
import riceYield from "../../Assets/Projects/riceYieldPrediction.jpeg";
import onlyInterns from "../../Assets/Projects/onlyinterns-logo.png";
import paintedPiece from "../../Assets/Projects/BobRoss.jpg";
import railJapanX from "../../Assets/Projects/RailJapanX.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cauio}
              isBlog={false}
              title="Redesigned the Website of Edtech Startup, CAIUO"
              description="Second Place in a hackathon by Redesigning the website for CAIUO, an edtech startup "
              demoLink="https://www.figma.com/proto/yFcacZwV7IdtEhDHIQcGxu/CAIUO-REDESIGNED-WEBSITE?kind=proto&node-id=29-1065&scaling=scale-down&show-proto-sidebar=1&starting-point-node-id=29%3A1065"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={acresite}
              isBlog={false}
              title="Acresite"
              description="A mobile application that lets local farmers have a direct-to-consumer transaction"
              ghLink="https://github.com/RhyenSftwareEngr/Acresite.git"
              //
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={riceYield}
              isBlog={false}
              title="Rice Yield Prediction for Irrigated and Rainfed Palay in the Philippines"
              description="Conducted data collection, comprehensive data analysis, data cleaning, and feature engineering on large-scale agricultural datasets using datasets in Philippine Statistic Authority and PAGASA"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="www.canva.com/design/DAF-Xq8h-SY/OzflSqzUKvoxdaW-5a4ZVw/edit?utm_content=DAF-Xq8h-SY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onlyInterns}
              isBlog={false}
              title="OnlyInterns"
              description="A web application that allows students and facilitators to keep track of the student’s internship status."
              ghLink="https://github.com/RhyenSftwareEngr/OnlyIntern.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={railJapanX}
              isBlog={false}
              title="RailJapanX"
              description="Toursim Website"
              ghLink="https://gitlab.com/webdevwebsitegroup/webdev-website.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paintedPiece}
              isBlog={false}
              title="PaintedPieceOfHeaven"
              description="Bob Ross Gallery Website"
              ghLink="https://github.com/RhyenSftwareEngr/PaintedPieceOfHeaven"
              demoLink="https://rhyensftwareengr.github.io/PaintedPieceOfHeaven/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
