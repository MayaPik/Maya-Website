import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function FullCard(props) {
  return (
    <Card className="project-card-view">
      <Row>
        <Col md={5}>
          <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        </Col>
        <Col md={7}>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
           <br/>
            <Card.Text style={{ textAlign: "start" }}>
              {props.description}
            </Card.Text>
            {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          GitHub
        </Button> )}
        {"\n"}
        {"\n"}

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
          </Card.Body>
        
        </Col>
      </Row>
    </Card>
  );
}

export default FullCard;
