import "../assets/testcss.css";
import React from "react";

export const Expertices = () => {
  return (
    <>
      <div className="expert" id="expert">
        <div className="expert_right">
          <div className="right_line_1">
            <h1>EXPERTICES</h1>
          </div>
          <div className="right_line_2">
            <div className="line_2_left">
              <div
                className="icons"
                style={{
                  "--background-image": `url(https://skillicons.dev/icons?i=visualstudio)`,
                }}
              >
                Software Development
              </div>
              <div className="title">
                <div className="htag">
                  <h1>{"<h2>"}</h1>
                  <h1>{"</h2>"}</h1>
                </div>
                <p>
                  Experienced in both functionsl and OOP: C#, Dart, Python,
                  Java, JavaScript, TypeScript
                </p>
              </div>
            </div>
            <div className="line_2_left">
              <div
                className="icons"
                style={{
                  "--background-image": `url(https://skillicons.dev/icons?i=react)`,
                }}
              >
                Frontend Dev React, NextJS
              </div>
              <div className="title">
                <div className="htag">
                  <h1>{"<h2>"}</h1>
                  <h1>{"</h2>"}</h1>
                </div>
                <p>
                  Passionate about UI/UX. Over 3 years of development Experience
                  in HTML, CSS, JS, .NET, React and NextJS frameworks
                </p>
              </div>
            </div>
            <div className="line_2_left">
              <div
                className="icons"
                style={{
                  "--background-image": `url(https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg)`,
                }}
              >
                Flutter Dev Android
              </div>
              <div className="title">
                <div className="htag">
                  <h1>{"<h2>"}</h1>
                  <h1>{"</h2>"}</h1>
                </div>
                <p>
                  Skilled in developin hybrid mobile apps and cross-platform
                  solutions using the Flutter framework.
                </p>
              </div>
            </div>
          </div>

          <div className="right_line_2">
            <div className="line_2_left">
              <div
                className="icons"
                style={{
                  "--background-image": `url(https://skillicons.dev/icons?i=vscode)`,
                }}
              >
                Web Development
              </div>
              <div className="title">
                <div className="htag">
                  <h1>{"<h2>"}</h1>
                  <h1>{"</h2>"}</h1>
                </div>
                <p>
                  Proficient in responsive design, front-end and back-end
                  technologies, also modern frameworks like React and Node.js.
                </p>
              </div>
            </div>
            <div className="line_2_left">
              <div
                className="icons"
                style={{
                  "--background-image": `url(https://cdn.simpleicons.org/opencv/5C3EE8)`,
                }}
              >
                AI Model Development
              </div>
              <div className="title">
                <div className="htag">
                  <h1>{"<h2>"}</h1>
                  <h1>{"</h2>"}</h1>
                </div>
                <p>
                  Skilled in data preprocessing, model building, evaluation,
                  deployment, and monitoring, using cutting-edge techniques and
                  tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
