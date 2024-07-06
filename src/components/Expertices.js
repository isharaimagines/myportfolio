import "../assets/testcss.css";
import web from "../assets/img/icons8-webpages-96.png";
import soft from "../assets/img/icons8-software-development-96.png";
import front from "../assets/img/icons8-react-js-96.png";
import flutter from "../assets/img/icons8-flutter-96.png";
import ai from "../assets/img/icons8-ai-96.png";
import React, { useState, useEffect } from "react";

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
                style={{ "--background-image": `url(${soft})` }}
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
                style={{ "--background-image": `url(${front})` }}
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
                style={{ "--background-image": `url(${flutter})` }}
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
                style={{ "--background-image": `url(${web})` }}
              >
                Web Development
              </div>
              <div className="title">
                <div className="htag">
                  <h1>{"<h2>"}</h1>
                  <h1>{"</h2>"}</h1>
                </div>
                <p>
                  Involves building, creating, and maintaining websites. It
                  encompasses a wide range of tasks, from coding to technical
                  design and optimizing website performance on the internet
                </p>
              </div>
            </div>
            <div className="line_2_left">
              <div
                className="icons"
                style={{ "--background-image": `url(${ai})` }}
              >
                Generative AI
              </div>
              <div className="title">
                <div className="htag">
                  <h1>{"<h2>"}</h1>
                  <h1>{"</h2>"}</h1>
                </div>
                <p>
                  Subfield of artificial intelligence that uses computer
                  algorithms to generate outputs that resemble human-created
                  content
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
