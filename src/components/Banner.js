import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/hoverH-img.png";
import "animate.css";

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
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="animate__animated animate__fadeIn">
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`Hi! I'm Ishara Siriwardhana`}{" "}
                <span
                  className="txt-rotate"
                  dataPeriod="1000"
                  data-rotate='["🧬 Computer Scientist",
                      "📈 Data Scientist",
                      "💾 Database Engineer",
                      "🌟 UI Engineer",
                      "🔣 System Analyst",
                      "🌐 Full Stack Developer", ]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                A passionate tech enthusiast with a multifaceted career spanning
                several pivotal roles in the technology landscape. With a
                relentless curiosity and a penchant for innovation, I've
                embarked on a journey to explore, create, and optimize in the
                world of software and data. Here's a glimpse into my diverse
                skill set and contributions across various domains
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="animate__animated animate__zoomIn">
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
