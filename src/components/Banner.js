import headerImg from "../assets/img/hoverH-img.png";

import { Typewriter } from "react-simple-typewriter";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <div className="containers">
        <div className="aligh-items-center">
          <div className="animate__animated animate__fadeIn">
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              Hi! I'm Ravindu Ishara !
              <br />
              <Typewriter
                words={[
                  "🌐 Full Stack Developer",
                  "🧬 Computer Scientist",
                  "📈 Data Scientist",
                  "💾 Database Engineer",
                  "🌟 UI Engineer",
                  "🔣 System Analysis",
                ]}
                loop={6}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={5000}
              />
            </h1>
            <p>
              Don't judge a book by its cover. Feel free to study my projects
              and decide yourself.
            </p>
          </div>

          <div className="animate__animated animate__zoomIn">
            <img src={headerImg} alt="Header Img" />
          </div>
        </div>
      </div>
    </section>
  );
};
