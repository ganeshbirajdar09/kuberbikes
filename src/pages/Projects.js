import React from "react";
import ProjectCard from "./ProjectCard";
import { Col } from "reactstrap";

import "./Project.css";

const Projects = () => {
  return (
    <>
      <Col md={4} className="offset-md-4 mt-4">
        <ProjectCard
          title="GitFire App"
          description="Application to get data of any github user by entering its username"
          code="https://github.com/ganeshbirajdar09/gitfire"
          live="https://ganeshbirajdar09.github.io/gitfire/"
        />
        <ProjectCard
          title="Codepen-Clone"
          description="Built with Reactjs
          - Use of Codemirror for editor
          "
          code="https://github.com/ganeshbirajdar09/codepen-clone"
          live="https://ganeshbirajdar09.github.io/codepen-clone/"
        />
        <ProjectCard
          title="Expense-Tracker"
          description="Expense Tracker built with ReactJs and Material UI
          "
          code="https://github.com/ganeshbirajdar09/expense_tracker"
          live="https://ganeshbirajdar09.github.io/expense_tracker/"
        />
      </Col>
    </>
  );
};

export default Projects;
