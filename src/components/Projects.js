import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/pwithc_1.png";
import projImg2 from "../assets/img/pwithc_2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "PEACE with CONTENTMENT",
      description: "Website Design & Developmenta",
      imgUrl: projImg1,
    },
    {
      title: "",
      description: "",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    <b>
                      <u>Computer Scientist </u>
                    </b>
                    <br></br>
                    As a Computer Scientist, I engage in pioneering research and
                    development in the ever-evolving field of computer science.
                    My work pushes the boundaries of knowledge and leads to
                    significant advancements.<br></br>
                    <br></br>
                    <b>
                      <u>Full Stack Developer </u>
                    </b>
                    <br></br>
                    My role as a Full Stack Developer has allowed me to drive
                    the entire development process, from frontend design to
                    backend implementation. I've successfully created web and
                    mobile applications that meet user needs and business goals.
                    <br></br>
                    <br></br>
                    <b>
                      <u>Software Engineer</u>
                    </b>
                    <br></br> As a Software Engineer, I've consistently
                    delivered innovative software solutions, leveraging my
                    expertise in various technologies and programming languages
                    to solve complex problems and achieve project objectives.
                    <br></br>
                    <br></br>
                    <b>
                      <u>System Analyst </u>
                    </b>
                    <br></br>
                    In my capacity as a System Analyst, I specialize in
                    optimizing systems and processes. My analytical skills and
                    recommendations have contributed to enhancing efficiency and
                    productivity in a range of projects.<br></br>
                    <br></br>
                    <b>
                      <u>UI Engineer </u>
                    </b>
                    <br></br>
                    My role as a UI Engineer revolves around creating visually
                    appealing and user-centric interfaces. I design and develop
                    interfaces that enhance user experiences and drive
                    engagement.<br></br>
                    <br></br>
                    <b>
                      <u>Database Engineer </u>
                    </b>
                    <br></br>
                    As a Database Engineer, I ensure the stability and
                    efficiency of database systems, contributing to data
                    integrity and accessibility. My expertise enhances system
                    performance and data management.<br></br>
                    <br></br>
                    <b>
                      <u>Data Scientist </u>
                    </b>
                    <br></br>
                    In my role as a Data Scientist, I leverage data analysis and
                    machine learning to derive insights and solve complex
                    problems. My work helps organizations make data-driven
                    decisions and achieve valuable results.<br></br>
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
