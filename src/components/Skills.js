import "../default.css";
import React, { useState, useEffect } from "react";

export const Skills = () => {
  const [count, setCount] = useState(0);

  const handleMouseOver = () => {
    let i = count;

    while (i < 100) {
      i++;

      setTimeout(() => {
        setCount((prevCount) => {
          if (prevCount < 100) {
            return prevCount + 1;
          }
          return prevCount;
        });
      }, (i - count) * 50);
    }
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--loader-width", `${count}%`);
  }, [count]);

  return (
    <section className="skillsPage" id="skills">
      <div className="container">
        <div className="skill-bx wow zoomIn">
          <h2>SKILLS</h2>
          <div className="skillColom">
            <strong>Best First-Person Weapons</strong>

            <ol class="alternating-colors" onMouseOver={handleMouseOver}>
              <li>
                <strong>
                  <div className="line">
                    Fullstack Developer [<div className="counts">{count}%</div>{" "}
                    ]
                  </div>

                  <div className="loader"></div>
                </strong>
                <p>
                  Who can build both the front end and the back end of a any
                  platform
                </p>
              </li>
              <li>
                <strong>
                  <div className="line">
                    Computer Science [<div className="counts">{count}%</div> ]
                  </div>
                  <div class="loader"></div>
                </strong>
                <p>
                  Design and develop applications for various domains, such as
                  artificial intelligence, web development, data science, and
                  cybersecurity.
                </p>
              </li>
              <li>
                <strong>
                  <div className="line">
                    Artificial Intelligence (AI) [
                    <div className="counts">{count}%</div> ]
                  </div>
                  <div class="loader"></div>
                </strong>
                <p>
                  It is a field of study in computer science that develops and
                  studies intelligent machines.
                </p>
              </li>
              <li>
                <strong>
                  <div className="line">
                    Generative AI [ <div className="counts">{count}%</div> ]
                  </div>
                  <div class="loader"></div>
                </strong>
                <p>
                  Artificial intelligence capable of generating text, images, or
                  other media, using generative models.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
