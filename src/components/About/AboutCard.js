import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "start" }}>

            Hi! My name is <span className="purple"> Maya Pik </span> and I am
            from <span className="purple"> Tel Aviv, Israel.</span>
            <br/>
            <br /> I am a full Stack & Unity developer,  with a strong passion for innovation and problem solving.
            <br />
            <br/>
            Additionally, I am an exhibiting artist with artistic background which honed my ability to translate creative vision into compelling results.
            <br />
            <br />
            With my skills constantly improving, I possess a true passion for devloping and creating engaging experiences.
            </p>
            <br />

          <p style={{ color: "rgb(155 126 172)" }}>
            "Ain't about how fast I get there, Ain't about what's waiting on the other side<br></br>It's the climb"{" "}
          </p>
          <footer className="blockquote-footer">Miley Cyrus</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
