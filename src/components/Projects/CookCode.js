import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FullCard from "./FullCard";
import Particle from "../Particle";
import { CgGames } from "react-icons/cg";


function CookCode() {
  return (
    <section>
      <Container fluid className="project-section">
      <h1 className="project-heading">
        3D Coding Game <strong className="purple"> Cook Code <CgGames/> </strong>
        </h1>
        <p style={{ color: "white", width:"35vw", margin:"auto"}} >
        I am developing a Unity game called "Cook Code," aimed at teaching kids how to code in a fun and interactive way
        This game introduces young players to programming concepts 
        while they help the kitchen crew to find efficient ways to do their roles.</p>
        <br></br>
    <iframe src="https://itch.io/embed-upload/8182306?color=000000" title="hello" allowFullScreen width="1000" height="700" allow="autoplay"><a href="https://mayapik.itch.io/cook-code">Play Cook Code on itch.io</a></iframe>
      <Particle />
      
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="project-card">
            <FullCard
              imgPath="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHd4NHdtc2FybnRobTltNWVzbHdsMjN4dzBvNWp5dWt1NWE3enFtNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sO0Ndy4Q1c5fPcUEGX/giphy.gif"
              title="Gameplay Mechanics"
              description="Experience the interactive gameplay of 'Cook Code' with our intuitive drag and drop mechanic. Players can easily manipulate ingredients and coding blocks to create their culinary masterpieces. Additionally, I implemented a robust save system that ensures players can seamlessly resume their progress. This system saves the level the user was in and the points they had, providing a smooth and uninterrupted gaming experience.              ."
            />
          </Col>

          <Col md={12} className="project-card">
            <FullCard
              imgPath="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzUzZWI0NXFpNGpvbGxuN3ltdWk1NTZ1ZmtuZDNpNnZlYzA5eTU0OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ccOixqcskTqHx7TDt2/giphy.gif"
              title="Object-Oriented Programming"
              description="In 'Cook Code,' I showcased my skills in object-oriented programming by implementing an abstract class called 'Player' and separate classes for each character, such as the &quot;Chef&quot; and &quot;Waiter,&quot; which inherit from the &quot;Player&quot; class. This approach demonstrated my ability to create modular and reusable code, ensuring efficient and maintainable game development. Additionally, I utilized inheritance and composition to incorporate shared functionalities and manage components effectively. These techniques highlight my proficiency in designing code structures that promote code reusability and modularity."
            />
          </Col>

          <Col md={12} className="project-card">
            <FullCard
              imgPath="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZm8zMThlMHFxbG0yeDlvdXF1Y3F4OG9pMWljYnMyc3g1ZHNnNnppdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mSpIqy2KQjmpo24Yxq/giphy.gif"
              title="The Educational Goal"
              description="Empower young players with invaluable programming knowledge through the captivating world of 'Cook Code.' My goal was to introducing key coding concepts in an interactive and engaging manner, fostering a love for learning in children. By seamlessly blending gameplay with educational content, I ensure an immersive experience that sparks curiosity and equips young minds with essential programming skills. Witness how 'Cook Code' transforms complex concepts into accessible and enjoyable challenges, igniting a passion for coding and setting the stage for a bright future in the world of technology."
            />
          </Col>

          <Col md={12} className="project-card">
            <FullCard
              imgPath="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmprMWh6azI2cDZhZ3dpaHJrbzNtMXByYWZpNmhpdDFreGxsaW0xayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MYArmtIqNrGHo25HJK/giphy.gif"
              title="UI and Sound Design"
              description="Immerse yourself in the captivating world of 'Cook Code' through our thoughtfully designed user interface (UI) and sound integration. I built an intuitive UI, enhancing the user gameplay experience. With the ability to easily mute and unmute sounds and music, you have full control over the auditory immersion, allowing you to tailor the game to your preferences."
             
            />
          </Col>
          <Col md={12} className="project-card">
            <FullCard
              imgPath="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExczk3Z3YxemFqdHBjdXcwYWVlYWRpNHh2aTR2NWtvZnQzODN5eXAxaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6lhQA8GzK4se55ANEl/giphy.gif"
              title="Scriptable Objects"
              description="In the SousChef level of 'Cook Code,' I harnessed the power of Scriptable Objects to create an efficient and accurate tomato tracking system. By utilizing the &quot;TomatoStatus&quot; Scriptable Object, I ensured seamless gameplay and precise tomato management. The code implementation allowed for dynamic tomato removal through the &quot;RemoveRandom()&quot; function, maintaining the correct count and state of tomatoes. Additionally, the &quot;RestartTomatoes()&quot; function reset the tomatoes to their initial state, ensuring a consistent gameplay experience."
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
    </section>
  );
}

export default CookCode;
