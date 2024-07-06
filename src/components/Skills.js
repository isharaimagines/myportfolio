import "../default.css";
import React, { useState, useEffect, useCallback } from "react";
import CardSider from "./CardSider";
import htmlIcon from "../assets/img/HTML.png";
import cssIcon from "../assets/img/css.png";
import jsIcon from "../assets/img/javaScript.png";
import reactIcon from "../assets/img/ReactJs.png";
import nodeIcon from "../assets/img/NodeJs.png";
import pythonIcon from "../assets/img/python.png";
import cIcon from "../assets/img/c.png";
import c2plusIcon from "../assets/img/C2Plus.png";
import csharpIcon from "../assets/img/Csharp.png";

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  }, [cards.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  }, [cards.length]);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 12000);

    return () => clearInterval(autoSlide);
  }, [nextSlide]);

  return (
    <section className="skillsPage" id="skills">
      <div className="container">
        <div className="skill-bx wow zoomIn">
          <h2>SKILLS</h2>

          <div className="skillColom">
            <div className="slider-container">
              <button className="slider-button prev" onClick={prevSlide}>
                <i class="ri-arrow-left-wide-line"></i>
              </button>
              <div className="slider">
                <div
                  className="slider-track"
                  style={{
                    transform: `translateX(-${currentIndex * 835}px)`,
                  }}
                >
                  <CardSider
                    imgSrc={htmlIcon}
                    subText="front-end"
                    title="HTML"
                    description="The content of the website allows establishing connections between the organization and various elements."
                    proficiency="EXCELLENT"
                    projects="5"
                    achievements="6+"
                    backgroundColor="#ff6d00"
                  />
                  <CardSider
                    imgSrc={cssIcon}
                    subText="front-end"
                    title="CSS"
                    description="Presentation and styling of documents written in markup languages like HTML or XML"
                    proficiency="EXCELLENT"
                    projects="5"
                    achievements="6+"
                    backgroundColor="#35c1f1"
                  />
                  <CardSider
                    imgSrc={jsIcon}
                    subText="front-end"
                    title="Javascript"
                    description="Allows to implement complex features on web pages"
                    proficiency="EXCELLENT"
                    projects="5"
                    achievements="6+"
                    backgroundColor="#ffd600"
                  />
                  <CardSider
                    imgSrc={reactIcon}
                    subText="front-end"
                    title="React JS"
                    description="Build encapsulated components that manage their own state, then compose them to make complex UIs"
                    proficiency="BETTER"
                    projects="5"
                    achievements="6+"
                    backgroundColor="#222222"
                  />
                  <CardSider
                    imgSrc={nodeIcon}
                    subText="back-end"
                    title="Node JS"
                    description="JavaScript runtime environment that allows to run JavaScript code outside of a web browser"
                    proficiency="EXCELLENT"
                    projects="5"
                    achievements="6+"
                    backgroundColor="#689f63"
                  />
                  <CardSider
                    imgSrc={pythonIcon}
                    subText="versatility & extensive"
                    title="Python"
                    description="Various applications ranging from web development and scientific computing to automation and data analysis"
                    proficiency="GREAT"
                    projects="0"
                    achievements="0"
                    backgroundColor="#0277bd"
                  />
                  <CardSider
                    imgSrc={cIcon}
                    subText="procedural-pro"
                    title="C"
                    description="System programming, emphasizing efficiency, control over hardware, and low-level manipulation"
                    proficiency="GREAT"
                    projects="0"
                    achievements="0"
                    backgroundColor="#303799"
                  />
                  <CardSider
                    imgSrc={c2plusIcon}
                    subText="multi-paradigm pro"
                    title="C++"
                    description="C programming while adding support for object-oriented programming (OOP) and generic programming"
                    proficiency="GREAT"
                    projects="0"
                    achievements="0"
                    backgroundColor="#3574d3"
                  />
                  <CardSider
                    imgSrc={csharpIcon}
                    subText="multi-paradigm pro"
                    title="C#"
                    description=".NET framework and is designed to be modern, versatile, and highly integrated with Microsoft technologies"
                    proficiency="GREAT"
                    projects="0"
                    achievements="0"
                    backgroundColor="#37474f"
                  />
                </div>
              </div>
              <button className="slider-button next" onClick={nextSlide}>
                <i class="ri-arrow-right-wide-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
