import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Computer scientist skills are a combination of hard skills like
                technical knowledge and soft skills necessary to collaborate in
                teams and achieve objectives creatively. Coding, software
                development and technical writing are just a few of the hard
                skills for computer science. Communication and teamwork are two
                examples of important soft skills that computer scientists can
                implement in their work.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
