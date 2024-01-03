import "../default.css";
import React, { useState, useEffect } from "react";

export const Skills = () => {
  const [counts, setCount] = useState(1);
  const [count2, setCount2] = useState(1);
  const [count3, setCount3] = useState(1);

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (counts < 100) {
        setCount(counts + 1);
      } else {
        setCount(1); // Reset count to 1
      }
    }, 50);

    return () => {
      clearInterval(interval1);
    };
  }, [counts]);

  useEffect(() => {
    const interval2 = setInterval(() => {
      if (count2 < 100) {
        setCount2(count2 + 1);
      } else {
        setCount2(1); // Reset count to 1
      }
    }, 70);

    return () => {
      clearInterval(interval2);
    };
  }, [count2]);

  useEffect(() => {
    const interval3 = setInterval(() => {
      if (count3 < 100) {
        setCount3(count3 + 1);
      } else {
        setCount3(1); // Reset count to 1
      }
    }, 80);

    return () => {
      clearInterval(interval3);
    };
  }, [count3]);

  return (
    <section className="skillsPage" id="skills">
      <div className="container">
        <div className="skill-bx wow zoomIn">
          <h2>SKILLS</h2>
          <div className="skillColom">
            <strong>Best First-Person Weapons</strong>

            <ol class="alternating-colors">
              <li>
                <strong>
                  <div className="line">
                    Fullstack Developer [<div className="counts">{counts}%</div>{" "}
                    ]
                  </div>

                  <div class="loader"></div>
                </strong>
                <p>
                  Who can build both the front end and the back end of a any
                  platform
                </p>
              </li>
              <li>
                <strong>
                  <div className="line">
                    Computer Science [<div className="counts">{count3}%</div> ]
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
                    <div className="counts">{count2}%</div> ]
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
                    Generative AI [ <div className="counts">{counts}%</div> ]
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
