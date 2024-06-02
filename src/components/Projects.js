import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/pwithc_1.png";
import projImg2 from "../assets/img/swoodwork.png";
import projImg3 from "../assets/img/restmenu.png";
import projImg4 from "../assets/img/asciiimageart.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "THE RESTAURANT MENU",
      description:
        "Develop a website for Restaurants, find out the Restaurant menu & services easily",
      imgUrl: projImg3,
      url: "https://img-restmenu.pages.dev/",
      report_url:
        "https://drive.google.com/file/d/1cgIuptM_xOjUVgew0VQcvmR3TrgNyHDJ/view?usp=drive_link",
    },
    {
      title: "WITH me PEACE",
      description:
        "Build a web application for Talk therapy, Mindfulness and meditation, Symptom tracking, Cognitive-behavioral therapy (CBT), Self-help resources",
      imgUrl: projImg1,
      url: "https://healthwebapp9.netlify.app/",
    },
    {
      title: "SIRIWARDHANAN WOODWORK",
      description:
        "Developed a web application for Woodworking products marketplace and publish his skill and performance. ",
      imgUrl: projImg2,
      url: "https://woodwork9.netlify.app/",
    },
    {
      title: "ASCII IMG",
      description:
        "Buid a web application for ascii code base image generator using images.",
      imgUrl: projImg4,
      url: "https://asciiimage.netlify.app/",
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
                  <h2>PROJECTS</h2>
                  <p>
                    For all of these projects, I would appreciate your feedback.
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
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
