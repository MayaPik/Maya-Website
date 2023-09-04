import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import avatar from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={4} className="myAvtar iframe-container">
            <Tilt>
            <img src={avatar} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
             MY STORY
            </h1>
            <p className="home-about-body">
            From HTML CSS to JS and React, my programming journey began with a YouTube video on "How to become a full stack developer" that I stumbled upon while taking a break from painting. As my skills improved, I found myself drawn to the world of game development.
              <br />
              <br /> During my programming studies I found a follow up passion: 
              <i>
                <b className="purple"> Creating interactive worlds and engaging meaningful experiences.</b>
              </i>
              <br />
              <br />
              <b className="purple">As a developer, I'm always looking to learn new techniques and tools to improve my skills.</b> I would love to connect with other developers who share my passion and collaborate on exciting projects.
              
            </p>
          </Col>
          
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MayaPik"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/maya-pik/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
