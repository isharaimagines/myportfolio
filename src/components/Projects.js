import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/pwithc_1.png";
import projImg2 from "../assets/img/swoodwork.png";
import projImg3 from "../assets/img/restmenu.png";
import projImg4 from "../assets/img/asciiimageart.png";
import projImg5 from "../assets/img/whatsai_load.png";
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
      imgClasses: [
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg",
      ],
    },
    {
      title: "WITH me PEACE",
      description:
        "Build a web application for Talk therapy, Mindfulness and meditation, Symptom tracking, Cognitive-behavioral therapy (CBT), Self-help resources",
      imgUrl: projImg1,
      url: "https://healthwebapp9.netlify.app/",
      report_url:
        "https://drive.google.com/file/d/16fU1VOUs_2J6k68vYibdwtkEMqEJgnKt/view?usp=drive_link",
      imgClasses: [
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg",
      ],
    },
    {
      title: "SIRIWARDHANAN WOODWORK",
      description:
        "Developed a web application for Woodworking products marketplace and publish his skill and performance. ",
      imgUrl: projImg2,
      url: "https://woodwork9.netlify.app/",
      report_url:
        "https://drive.google.com/file/d/1FtfwvIz5mFQkTHZTNN9ODQZv0fSQgoCx/view?usp=drive_link",
      imgClasses: [
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg",
      ],
    },
    {
      title: "ASCII IMG",
      description:
        "Buid a web application for ascii code base image generator using images.",
      imgUrl: projImg4,
      url: "https://asciiimage.netlify.app/",
      report_url:
        "https://drive.google.com/file/d/1MEh1a96hJ80GreJn2KJgIbtHA_HezePS/view?usp=drive_link",
      imgClasses: [
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg",
      ],
    },
    {
      title: "WhatsAI",
      description:
        "This project involves the development of a chatbot web application designed to enable users to interact with an AI model.",
      imgUrl: projImg5,
      url: "https://whatsai.netlify.app/",
      report_url:
        "https://drive.google.com/file/d/1bmYhu7vgWkTDd1ho_Zbv41_RJulhWfje/view?usp=drive_link",
      imgClasses: [
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/googlecloud-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tensorflow-colored.svg",
      ],
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
