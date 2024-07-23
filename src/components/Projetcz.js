import "../assets/testcss.css";
import React, { useEffect } from "react";
import projImg1 from "../assets/img/pwithc_1.png";
import projImg2 from "../assets/img/swoodwork.png";
import projImg3 from "../assets/img/restmenu.png";
import projImg4 from "../assets/img/asciiART.png";
import projImg5 from "../assets/img/whatsai_load.png";
import Aos from "aos";
import "aos/dist/aos.css";

export const Projetcz = () => {
  const projetcClasses = [
    {
      title: "WhatsAI",
      description:
        "This project involves the development of a chatbot web application designed to enable users to interact with an AI model.",
      imgClass: projImg5,
      siteLink: "https://whatsai.netlify.app/",
      reportLink:
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
    {
      title: "ASCII IMG",
      description:
        "Buid a web application for ascii code base image generator using images.",
      imgClass: projImg4,
      siteLink: "https://asciiimage.netlify.app/",
      reportLink:
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
      imgClass: projImg2,
      title: "SIRIWARDHANAN WOODWORK",
      description:
        "Developed a web application for Woodworking products marketplace and publish his skill and performance. ",
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
      siteLink: "https://siriwardhana.netlify.app/",
      reportLink:
        "https://drive.google.com/file/d/1FtfwvIz5mFQkTHZTNN9ODQZv0fSQgoCx/view?usp=drive_link",
    },
    {
      imgClass: projImg1,
      title: "WITH me PEACE",
      description:
        "Build a web application for Talk therapy, Mindfulness and meditation, Symptom tracking, Cognitive-behavioral therapy (CBT), Self-help resources",
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
      siteLink: "https://withmepeace.netlify.app/",
      reportLink:
        "https://drive.google.com/file/d/16fU1VOUs_2J6k68vYibdwtkEMqEJgnKt/view?usp=drive_link",
    },
    {
      imgClass: projImg3,
      title: "THE RESTAURANT MENU",
      description:
        "Develop a website for Restaurants, find out the Restaurant menu & services easily",
      imgClasses: [
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode-colored.svg",
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg",
      ],
      siteLink: "https://img-restmenu.pages.dev/",
      reportLink:
        "https://drive.google.com/file/d/1cgIuptM_xOjUVgew0VQcvmR3TrgNyHDJ/view?usp=drive_link",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 2000, disable: "mobile" });
  }, []);

  return (
    <>
      <div className="project" id="projects">
        <div className="project_right">
          <div
            className="right_line_1"
            data-aos="slide-up"
            data-aos-delay="300"
          >
            <h1>PROJECTS</h1>
          </div>
          {projetcClasses.map((project, index) => (
            <div key={index} className="right_line_2">
              <div
                className="line_2_left"
                data-aos="slide-up"
                data-aos-delay="300"
              >
                <div
                  className="images"
                  data-aos="slide-up"
                  data-aos-delay="300"
                >
                  <img src={project.imgClass} alt="alt" />
                </div>
                <div className="feath">
                  <h1
                    className="title"
                    data-aos="slide-up"
                    data-aos-delay="300"
                  >
                    {project.title}
                  </h1>
                  <h3 className="des" data-aos="slide-up" data-aos-delay="300">
                    {project.description}
                  </h3>
                  <div
                    className="Icons"
                    data-aos="slide-up"
                    data-aos-delay="400"
                  >
                    {project.imgClasses.map((imgClass, index) => (
                      <img key={index} src={imgClass} alt="view" />
                    ))}
                  </div>
                  <div
                    className="btns"
                    data-aos="slide-up"
                    data-aos-delay="300"
                  >
                    <div className="site_btn">
                      <p>
                        Here the end user validates the final product. It
                        assesses product functionality, reliability, usability,
                        and compatibility.
                        <a href={project.siteLink} className="weblink">
                          you can try beta version of this project visit&nbsp;
                          <i class="ri-external-link-line"></i>
                        </a>
                        The user's attention on advantages that project can
                        provide and, thus, by enriching the user's experience,
                        it facilitates the business process bringing benefits to
                        the Business Owner as well.
                        <a href={project.reportLink} className="report">
                          for more details read the project documentation&nbsp;
                          <i class="ri-external-link-line"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
