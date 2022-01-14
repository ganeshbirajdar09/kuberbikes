import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

import "./Project.css";

const ProjectCard = ({ live, code, title, description }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <CardTitle className="text-primary">
          <h1>
            <span className="">{title}</span>
          </h1>
        </CardTitle>
        <CardText>{description}</CardText>
        <CardText
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <a rel="noreferrer" target="_blank" href={live}>
            See project in Action
          </a>
          <a rel="noreferrer" target="_blank" href={code}>
            See code
          </a>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
