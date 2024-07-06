import "../assets/testcss.css";

export const Footer = () => {
  return (
    <div className="footer" id="connect">
      <div className="f_container">
        <div className="social">
          <a href="https://www.linkedin.com/in/ishararaviget9/">
            <i class="ri-linkedin-box-fill"></i>
          </a>
          <a href="https://github.com/ishararaviget9/">
            <i class="ri-github-fill"></i>
          </a>
          <a href="mailto:studymotivat01@gmail.com">
            <i class="ri-mail-send-fill"></i>
          </a>
          <a href="https://discord.gg/ZBPR3EP3B6">
            <i class="ri-discord-fill"></i>
          </a>

          <a href="https://t.me/DroidImaginalytic">
            <i class="ri-telegram-fill"></i>
          </a>
          <a href="https://instagram.com/ishararaviget9">
            <i class="ri-instagram-line"></i>
          </a>
          <a href="https://ishararaviget9.github.io/myprofile/">
            <i class="ri-youtube-fill"></i>
          </a>
          <a>
            <i class="ri-whatsapp-line"></i>
          </a>
        </div>
        <div className="label">
          <i class="ri-copyright-line"></i>
          {"  "} ishararaviget9. All Rights Reserved
        </div>
        <div className="tags">
          <li>API</li>
          <li>Cookie Policy</li>
          <li>FAQ</li>
          <li>Privacy</li>
          <li>Terms of service</li>
        </div>
      </div>
    </div>
  );
};
