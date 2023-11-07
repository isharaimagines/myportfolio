import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import profileme from "../assets/img/1.jpg";
export const Profile = () => {
  return (
    <section className="profile" id="profile">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>About Me</h2>
              <div className="newColom">
                <div className="profile_me">
                  <div className="image">
                    <img src={profileme} alt="profile_me"></img>
                  </div>
                  <h3>
                    Ishara Siriwardhana <sup>☔</sup>
                  </h3>

                  <p>
                    <i class="ri-edit-2-fill">1</i>

                    <i class="ri-verified-badge-fill">2</i>

                    <i class="ri-thumb-up-fill">3</i>

                    <i class="ri-thumb-down-fill">4</i>
                  </p>
                </div>
                <div className="discript">
                  <div className="icons">
                    <div className="icon_logo">
                      <i class="ri-medal-line"></i>
                      <sub>Reword</sub>
                      <sup>8+</sup>
                      <div className="count"></div>
                    </div>
                    <div className="icon_logo">
                      <i class="ri-git-repository-fill"></i>
                      <sub>Git Repository</sub>
                      <sup>9+</sup>
                      <div className="count"></div>
                    </div>
                    <div className="icon_logo">
                      <i class="ri-timer-flash-line"></i>
                      <sub>Flash Time</sub>
                      <sup>-0.2s</sup>
                      <div className="count"></div>
                    </div>
                  </div>
                  <p>
                    Computer scientist skills are a combination of hard skills
                    like technical knowledge and soft skills necessary to
                    collaborate in teams and achieve objectives creatively.
                    Coding, software development and technical writing are just
                    a few of the hard skills for computer science. Communication
                    and teamwork are two examples of important soft skills that
                    computer scientists can implement in their work.
                  </p>
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
