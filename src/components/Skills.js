import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import "../default.css";
import "../assets/js/init";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>

              <div id="content">
                <div className="legend">
                  <h1>Legend:</h1>
                  <div className="skills">
                    <ul>
                      <li className="myList">Fullstack Developer</li>
                      <li className="myList">Computer Science</li>
                      <li className="myList">Generative AI</li>
                      <li className="myList">Artificial Intelligence (AI)</li>
                    </ul>
                  </div>
                </div>
                <div id="diagram"></div>
              </div>

              <div className="get">
                <div className="arc">
                  {/* Fullstack Developer */}
                  <input type="hidden" className="percent" value="99" />
                  <input type="hidden" className="color" value="#BEDBE9" />
                  <input type="hidden" className="order" value="1" />
                </div>
                <div className="arc">
                  {/* Computer Science */}
                  <input type="hidden" className="percent" value="90" />
                  <input type="hidden" className="color" value="#97BE0D" />
                  <input type="hidden" className="order" value="2" />
                </div>
                <div className="arc">
                  {/* Generative AI */}
                  <input type="hidden" className="percent" value="90" />
                  <input type="hidden" className="color" value="#D84F5F" />
                  <input type="hidden" className="order" value="3" />
                </div>
                <div className="arc">
                  {/* Artificial Intelligence (AI) */}
                  <input type="hidden" className="percent" value="90" />
                  <input type="hidden" className="color" value="#88B8E6" />
                  <input type="hidden" className="order" value="4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
