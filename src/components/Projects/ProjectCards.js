import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Render both Demo and GitHub links if both are available */}
        {props.demoLink && props.ghLink && (
          <>
            <Button variant="primary" href={props.demoLink} target="_blank">
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <BsGithub /> &nbsp;
              {"GitHub"}
            </Button>
          </>
        )}

        {/* Render Demo link if only Demo link is available */}
        {!props.ghLink && props.demoLink && (
          <Button variant="primary" href={props.demoLink} target="_blank">
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}

        {/* Render GitHub link if only GitHub link is available */}
        {props.ghLink && !props.demoLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
