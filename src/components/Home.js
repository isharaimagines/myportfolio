import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/img/auto_x2_light_ai.png";
import "../assets/testcss.css";
import React, { useState, useEffect } from "react";

export const Home = () => {
  const [iconClass, setIconClass] = useState("0");

  useEffect(() => {
    const classNames = [
      "ri-android-fill",
      "ri-google-fill",
      "ri-google-play-fill",
      "ri-gitlab-fill",
      "ri-open-source-fill",
      "ri-reddit-fill",
      "ri-skype-fill",
      "ri-instagram-fill",
      "ri-linkedin-box-fill",
      "ri-discord-fill",
      "ri-mail-fill",
      "ri-github-fill",
      "ri-youtube-fill",
      "ri-telegram-fill",
      "ri-whatsapp-line",
    ];
    let currentIndex = 0;

    const interval = setInterval(() => {
      setIconClass(classNames[currentIndex]);
      currentIndex = (currentIndex + 1) % classNames.length;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="home" id="home">
        <div className="home_left">
          <div className="left_label">
            <div className="a1">
              <h1>
                <i class="ri-pen-nib-fill"></i> About Me
              </h1>
            </div>
            <div className="a2"></div>
          </div>
          <div className="left_about">
            <img src={profile} alt="name" />
            <div className="bottom">
              <h2>
                Im,<br></br> Ravindu Ishara
              </h2>
              <div className="logo"></div>
            </div>

            <h3>
              <Typewriter
                words={[
                  "🧩 Full Stack Developer",
                  "🤖 Robotics Computer Scientist",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h3>
          </div>
        </div>
        <div className="home_right">
          <div className="right_line_1">
            <h1>PORTFOLIO</h1>
          </div>
          <div className="right_line_2">
            <div className="line_2_left">
              <div className="skill_card"></div>
            </div>
            <div className="line_2_right">
              <div className="line_1">
                <h1>6</h1>
                <p>Projects</p>
              </div>
              <div className="line_2">
                <h1>12+</h1>
                <p>Awards</p>
              </div>
            </div>
          </div>
          <div className="right_line_3">
            <div className="line_3_left">
              <i className={iconClass}></i>
            </div>
            <div className="line_3_right">
              <div className="r1">
                <a href="https://example.com">
                  <i class="ri-download-cloud-2-line"></i>
                  {"  "}Download CV
                </a>
              </div>
              <div className="r2">
                <h1>3+</h1>
                <h2>
                  Years of <br></br>Experience
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
