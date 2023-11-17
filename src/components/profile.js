import "react-multi-carousel/lib/styles.css";
import profileme from "../assets/img/1.jpg";
export const Profile = () => {
  return (
    <section className="profile" id="profile">
      <div className="container">
        <div className="profile-bx wow zoomIn">
          <h2>About Me</h2>
          <div className="newColom">
            <div className="profile_me">
              <div className="image">
                <img src={profileme} alt="profile_me"></img>
              </div>
              <h3 className="myname">
                Ishara Siriwardhana <i class="ri-lightbulb-flash-fill"></i>
              </h3>

              <p>
                <i class="ri-edit-2-fill">
                  <span> 1000+</span>
                </i>

                <i class="ri-verified-badge-fill">
                  <span> 9+</span>
                </i>

                <i class="ri-thumb-up-fill">
                  <span> 20+</span>
                </i>
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
                <div className="icon_logo">
                  <i class="ri-terminal-box-fill"></i>
                  <sub>Development</sub>
                  <sup>20+</sup>
                  <div className="count"></div>
                </div>
              </div>

              <p>
                A passionate tech enthusiast with a multifaceted career spanning
                several pivotal roles in the technology landscape. With a
                relentless curiosity and a penchant for innovation, I've
                embarked on a journey to explore, create, and optimize in the
                world of software and data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
