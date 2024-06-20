import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  url,
  report_url,
  imgClasses,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="banner" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="Icons">
            {imgClasses.map((imgClass, index) => (
              <img key={index} src={imgClass} alt="view" />
            ))}

            {/* <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/googlecloud-colored.svg"
              alt="Google Cloud"
            />
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg"
              alt="Google Cloud"
            /> */}
          </div>
        </div>
      </div>
      <div className="project_links">
        <a href={url} className="weblink">
          <i className="ri-link"></i> Site
        </a>
        <a href={report_url} className="report">
          <i className="ri-file-list-3-line"></i> Report
        </a>
      </div>
    </Col>
  );
};
