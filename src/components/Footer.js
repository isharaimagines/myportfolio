import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/my_logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ishara-siriwardhana-5b1732274/">
                <i class="ri-linkedin-box-fill"></i>
              </a>
              <a href="https://ishararaviget9.github.io/myprofile/">
                <i class="ri-facebook-circle-fill"></i>
              </a>
              <a href="https://ishararaviget9.github.io/myprofile/">
                <i class="ri-instagram-line"></i>
              </a>
              <a href="https://ishararaviget9.github.io/myprofile/">
                <i class="ri-youtube-fill"></i>
              </a>
              <a href="https://github.com/ishararaviget9/">
                <i class="ri-github-fill"></i>
              </a>
              <a href="https://discord.gg/ZCyEMb9y">
                <i class="ri-discord-fill"></i>
              </a>
              <a href="https://t.me/DroidImaginalytic">
                <i class="ri-telegram-fill"></i>
              </a>
            </div>
            <p>
              <i class="ri-copyright-line"></i> Copyright 2023. All Rights
              Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
