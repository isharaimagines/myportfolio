import "../default.css";

export const Skills = () => {
  return (
    <section className="skillsPage" id="skills">
      <div className="container">
        <div className="skill-bx wow zoomIn">
          <h2>SKILLS</h2>
          <div className="skillColom">
            <strong>Best First-Person Shooters</strong>

            <ol class="alternating-colors">
              <li>
                <strong>
                  Fullstack Developer
                  <div class="loader"></div>
                </strong>
                <p>Fight aliens, wear a head crab, learn about gravity</p>
              </li>
              <li>
                <strong>
                  Computer Science
                  <div class="loader"></div>
                </strong>
                <p>
                  Fight aliens, wear an AI, learn about screen peeking siblings
                </p>
              </li>
              <li>
                <strong>
                  Generative AI<div class="loader"></div>
                </strong>
                <p>
                  Fight non-alien residents, wear hats, learn about teamwork
                </p>
              </li>
              <li>
                <strong>
                  Artificial Intelligence (AI)
                  <div class="loader"></div>
                </strong>
                <p>Ski, slip, and slide your way to victory</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
