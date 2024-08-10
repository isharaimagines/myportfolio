import profile from "../assets/img/auto_x2_light_ai.png";
import logo from "../assets/img/my_logo.png";
import "../assets/testcss.css";
import React, { useState, useEffect } from "react";
import Aos from "aos";
import a1 from "../assets/img/com-3000-uEDNYVULR2.jpg";
import a3 from "../assets/img/AdobeStock-u4UFyTJEbR.jpg";
import a4 from "../assets/img/AdobeStock-CnAomlY3jP.jpg";
import a5 from "../assets/img/AdobeStock-nAYhaikmKp.jpg";
import a6 from "../assets/img/AdobeStock-saWjVfmogI.jpg";
import "aos/dist/aos.css";

const images = [
  {
    image: a1,
    title: "Bsc (Hon) Computer Science",
    sub: "In the final Academic Year University of Plymouth",
  },
  {
    image: a3,
    title: "Interests",
    sub: "assionate about open-source projects and contributing to the developer community.",
  },
  {
    image: a4,
    title: "Active",
    sub: "Avid participant in coding competitions and hackathons.",
  },
  {
    image: a5,
    title: "Tech Enthusiast",
    sub: "Enjoys learning about new technologies and staying updated with industry trends.",
  },
  {
    image: a6,
    title: "Q&A",
    sub: "I'm also excited to talk about something you love. Contact me",
  },
];

export const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [slide, setSlide] = useState(true);
  const [isSliding, setIsSliding] = useState(true);

  useEffect(() => {
    let interval;
    if (isSliding) {
      interval = setInterval(() => {
        setSlide(false);
        setTimeout(() => {
          setCurrentImage((prev) => (prev + 1) % images.length);
          setSlide(true);
        }, 500); // Duration of scale down effect
      }, 5000); // Total duration for each image
    }

    return () => clearInterval(interval);
  }, [isSliding]);

  const toggleSliding = () => {
    setIsSliding((prev) => !prev);
  };

  useEffect(() => {
    Aos.init({ duration: 50000 });
  }, []);

  return (
    <>
      <div className="home" id="home">
        <div className="home_left" data-aos="flip-left">
          <div className="left_about">
            <div className="a1">
              <h1>
                <i class="ri-pen-nib-fill"></i> About Me
              </h1>
            </div>
            <img src={profile} alt="name" />
            <div className="bottom">
              <sup>PORTFOLIO</sup>
              <h2>Im, Ravindu Ishara</h2>
              <p>Kandy District, Central Province, Sri Lanka</p>
              <p className="pin">open to work</p>
            </div>
          </div>
        </div>
        <div className="home_right">
          <div className="right_line_1">
            <div className="line_1 _1" data-aos="flip-up" data-aos-delay="100">
              <a href="https://github.com/isharaimagines/">
                <img
                  src="https://skillicons.dev/icons?i=github"
                  alt="iconname"
                />
              </a>
            </div>
            <div className="line_1 _2" data-aos="flip-up" data-aos-delay="200">
              <a href="https://www.linkedin.com/in/isharaimagines/">
                <img
                  src="https://skillicons.dev/icons?i=linkedin"
                  alt="icon name"
                />
              </a>
            </div>
            <div className="line_1 _3" data-aos="flip-up" data-aos-delay="300">
              <a href="https://discord.gg/ZBPR3EP3B6">
                <img
                  src="https://skillicons.dev/icons?i=discord"
                  alt="iconname"
                />
              </a>
            </div>
            <div className="line_1 _4" data-aos="flip-up" data-aos-delay="400">
              <a href="https://t.me/isharaimagines">
                <img
                  src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/telegram/default.svg"
                  alt="iconname"
                />
              </a>
            </div>
            <div className="line_1 _5" data-aos="flip-up" data-aos-delay="500">
              <a href="https://instagram.com/isharaimagines">
                <img
                  src="https://skillicons.dev/icons?i=instagram"
                  alt="iconname"
                />
              </a>
            </div>
            <div className="line_1 _6" data-aos="flip-up" data-aos-delay="600">
              <a href="mailto:studymotivat01@gmail.com">
                <img
                  src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/gmail/default.svg"
                  alt="iconname"
                />
              </a>
            </div>
          </div>

          <div className="right_line_2">
            <div className={`line_2_left ${slide ? "slide" : ""}`}>
              <button onClick={toggleSliding}>
                <i
                  className={
                    isSliding ? "ri-pause-large-fill" : "ri-play-large-fill"
                  }
                ></i>
              </button>

              <div
                className="carousel-inner"
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
                data-aos="fade"
              >
                {images.map((item, index) => (
                  <div className="carousel-item" key={index}>
                    <div className="title">
                      <h1>{item.title}</h1>
                      <p>{item.sub}</p>
                    </div>
                    <img src={item.image} alt={`Slide ${index}`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="line_2_right" data-aos="flip-right">
              <div className="line_1">
                <h1>6</h1>
                <p>Projects</p>
              </div>
              <div className="line_2">
                <h1>3+</h1>
                <p>Awards</p>
                <div className="wave"></div>
              </div>
            </div>
          </div>
          <div className="right_line_3">
            <div className="line_3_left" data-aos="flip-down">
              <img src={logo} alt="logname" />
            </div>
            <div className="line_3_right">
              <div className="r1" data-aos="flip-right">
                <a
                  href="https://drive.google.com/file/d/1cQOwNgJx_NLWEi8VKsKzzR99v15A-scF/view?usp=sharing"
                  className="button"
                >
                  <div className="button__content">
                    <span className="button__text">
                      <h1>
                        <i className="ri-download-cloud-2-fill"></i>
                      </h1>
                      <p>
                        Download <br></br>CV
                      </p>
                    </span>

                    <div className="button__reflection-1"></div>
                    <div className="button__reflection-2"></div>
                  </div>

                  <img
                    src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/69-GoogleDrive_google_drive-512.png"
                    alt=""
                    className="button__star-1"
                  />
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/69-GoogleDrive_google_drive-512.png"
                    alt=""
                    className="button__star-2"
                  />
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/69-GoogleDrive_google_drive-512.png"
                    alt=""
                    className="button__circle-1"
                  />
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/107-chrome-512.png"
                    alt=""
                    className="button__circle-2"
                  />
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/107-chrome-512.png"
                    alt=""
                    className="button__diamond"
                  />
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/107-chrome-512.png"
                    alt=""
                    className="button__triangle"
                  />

                  <div className="button__shadow"></div>
                </a>
              </div>
              <div className="r2" data-aos="flip-left">
                <a href="https://bit.ly/isharaget9" class="button">
                  <div className="button__content">
                    <span className="button__text">
                      <h1>2+</h1>
                      <p>
                        Years of <br></br>Experience
                      </p>
                    </span>

                    <div className="button__reflection-1"></div>
                    <div className="button__reflection-2"></div>
                  </div>

                  <img
                    src="https://skillicons.dev/icons?i=firebase"
                    alt=""
                    className="button__star-1"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=cpp"
                    alt=""
                    className="button__star-2"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=cs"
                    alt=""
                    className="button__circle-1"
                  />
                  <img
                    src="https://cdn.simpleicons.org/npm/CB3837"
                    alt=""
                    className="button__circle-2"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=js"
                    alt=""
                    className="button__diamond"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=nodejs"
                    alt=""
                    className="button__triangle"
                  />

                  <div className="button__shadow"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
