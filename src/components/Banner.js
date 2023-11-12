import { useState, useEffect } from "react";
import headerImg from "../assets/img/hoverH-img.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // eslint-disable-next-line
  const [index, setIndex] = useState(1);
  const toRotate = [
    "🌐 Full Stack Developer",
    "🧬 Computer Scientist",
    "📈 Data Scientist",
    "💾 Database Engineer",
    "🌟 UI Engineer",
    "🔣 System Analyst",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    }; // eslint-disable-next-line
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <div className="container">
        <div className="aligh-items-center">
          <div className="animate__animated animate__fadeIn">
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi! I'm Ishara Siriwardhana`}{" "}
              <span
                className="txt-rotate"
                dataPeriod="1000"
                data-rotate='[ "🌐 Full Stack Developer",
                "🧬 Computer Scientist",
                "📈 Data Scientist",
                "💾 Database Engineer",
                "🌟 UI Engineer",
                "🔣 System Analyst", ]'
              >
                <span className="wrap">{text}</span>
              </span>
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
