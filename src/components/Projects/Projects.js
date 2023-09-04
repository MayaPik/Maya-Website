import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import FullCard from "./FullCard";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I've worked on recently, both Full Stack and Unity games.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://media.giphy.com/media/eSjjpSKRouJna6QugG/giphy.gif"
              title="Disneyland average wait time"
              description="A Back-end of a trip-planning application for Disneyland. I am creating an API that displays the average wait time for each ride at Disneyland Paris"
              ghLink="https://github.com/MayaPik/disneyAVGwaitingTime"
              demoLink="https://www.loom.com/share/4857b2e9ebfb462692b9f9987d5234a4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://media.giphy.com/media/IPZ1mCyRlyj1GWbfKO/giphy.gif"
              title="Weather App"
              description="A simple weather app that lets you save favorites and get the current location and the location for the next five days. I Developed the front-end using React and styled with Material UI."
              ghLink="https://github.com/MayaPik/weatherApp"
              demoLink="https://mayaweatherapp.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://media.giphy.com/media/rnQIHCDrrtCsVbMGII/giphy.gif"
              title="Our Shop"
              description="A front-end project for an e-commerce website. Utilized an existing fake-shop API to display products, categories, and other related data on the website. I Developed the front-end using React and styled with Material UI."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://mayostore.netlify.app/"              
            />
          </Col>

          <Col md={12} className="project-card">
            <FullCard
              imgPath="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjBmNzdiNzJiOWI0OTEyYWQ5YTBiNDcxYmU2MjE0MGI2YzU2YzhlOSZjdD1n/VXZpGwSobOiWGeObkc/giphy.gif"
              title="Picking Up Time"
              description="After-school childcare setting. With this application, parents can easily set the pickup time for their child, and guides can efficiently manage and track the schedule, including any changes. Managers can also have a clear overview of the schedule and make necessary updates."
              ghLink="https://github.com/MayaPik/Picking-Up-Time"
              demoLink=https:"//www.loom.com/share/434a3c4f3387428f8a9be0600cbd9e93"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzZ2eGJrenFqaGlyZGVlcnRyNXpkZzk2cjRkMXh3bXk2NzA1aWRxeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cR6kCFRChtxZ4uSNKn/giphy.gif"
              title="In The Dark"
              description="Created realistic terrains, assets, and particle systems to enhance the immersive gaming experience. Utilized Raycast technology to improve realism and create engaging combat scenarios."
              ghLink="https://github.com/MayaPik/In-The-Dark-Game"
              demoLink="https://mayapik.itch.io/in-the-dark"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGF4eWlkOXExbHBtMXF2bXl3Y2RqN3A3NDE2YnJvMGJudHA5dG13ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gZBdyrtJaeRbkKQJOX/giphy.gif"
              title="Rush Game"
              description="Implemented pathfinder algorithm BFS to create enemy movement patterns and optimize gameplay.
              Designed and strategically placed towers to provide engaging combat scenarios and protect the treasure."
              ghLink="https://github.com/MayaPik/Rush-Game-Pathfinding"
              demoLink="https://mayapik.itch.io/rush-game"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
