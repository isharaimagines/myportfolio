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
            <strong>Computer Science Best First-Person Weapons</strong>

            <ol class="alternating-colors" onMouseOver={handleMouseOver}>
              <li>
                <strong>
                  <div className="line">
                    Attention to detail. [<div className="counts">{count}%</div>{" "}
                    ]
                  </div>

                  <div className="loader"></div>
                </strong>
                <p>
                  In the computer science and IT field, attention to detail is
                  vital. You must be able to look at long lines of code and
                  identify anything amiss. Having an eye for small details can
                  help you significantly impact projects. Listing on your résumé
                  that you're detail-oriented shows potential employers that you
                  understand how impactful small elements are to the larger
                  project. Being a stickler for the details can be an immense
                  strength.
                </p>
              </li>
              <li>
                <strong>
                  <div className="line">
                    Creativity [<div className="counts">{count}%</div> ]
                  </div>
                  <div class="loader"></div>
                </strong>
                <p>
                  Some people think computer science is all logical, dry work.
                  But that's simply not true. Creativity is key to solving
                  problems and creating functional, modern web applications and
                  websites. When you put “creativity” on your résumé, the hiring
                  manager can see that you're someone who'll think outside the
                  box to solve problems and offer unique solutions.
                </p>
              </li>
              <li>
                <strong>
                  <div className="line">
                    Communication [<div className="counts">{count}%</div> ]
                  </div>
                  <div class="loader"></div>
                </strong>
                <p>
                  In the IT world, communication is critical. This soft skill is
                  vital to helping you talk to clients, coworkers, and managers.
                  Show that you're skilled at explaining your projects,
                  objectives, and timelines. Listing “communication” on your
                  résumé shows you recognize the importance of communicating
                  clearly in your job. It's wise to show employers that you are
                  willing to engage respectfully in workplace communication.
                </p>
              </li>
              <li>
                <strong>
                  <div className="line">
                    Time management [ <div className="counts">{count}%</div> ]
                  </div>
                  <div class="loader"></div>
                </strong>
                <p>
                  In most jobs in the computer science field, there are tight
                  deadlines, competing priorities, and quick transitions between
                  tasks. Effective time management will help you stay on top of
                  your various tasks and projects. By listing “time management”
                  on your résumé, you show potential employers that you're
                  dedicated to hitting deadlines and will be productive and
                  efficient in your work.
                </p>
              </li>
              <li>
                <strong>
                  <div className="line">
                    Teamwork and cooperation [{" "}
                    <div className="counts">{count}%</div> ]
                  </div>
                  <div class="loader"></div>
                </strong>
                <p>
                  Being a good team player is key in any organization, but it's
                  particularly important in computer science. Software
                  engineers, data scientists, and IT professionals are often
                  expected to collaborate with several different groups within
                  an organization to ensure that timelines are met and
                  expectations are fulfilled.
                </p>
              </li>
              <li>
                <strong>
                  <div className="line">
                    Analysis [ <div className="counts">{count}%</div> ]
                  </div>
                  <div class="loader"></div>
                </strong>
                <p>
                  Computer science is a highly analytical field. You must be
                  able to analyze hundreds of lines of code to troubleshoot and
                  find solutions. Above all, being proactive is critical, as
                  it's important to ensure quality at the creation stage to
                  avoid costly fixes later. The most impactful type of analysis
                  involves taking data and deriving conclusions that drive
                  change and produce measurable results for an organization.
                </p>
              </li>
              <li>
                <strong>
                  <div className="line">
                    Organization [ <div className="counts">{count}%</div> ]
                  </div>
                  <div class="loader"></div>
                </strong>
                <p>
                  Staying organized is vital to not only your productivity but
                  also to a business's success. For instance, if you're working
                  on complex lines of code and can't keep your work organized,
                  you could make costly mistakes that could cause systems to
                  stop functioning or even expose sensitive data.
                </p>
              </li>
              <li>
                <strong>
                  <div className="line">
                    Training and teaching [{" "}
                    <div className="counts">{count}%</div> ]
                  </div>
                  <div class="loader"></div>
                </strong>
                <p>
                  Showing that you're a willing teacher can help you stand out
                  when searching for a job. Someone with a mindset to lift and
                  guide others can significantly benefit any organization. Being
                  technically proficient is important, but training and
                  leadership skills can set you apart.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
