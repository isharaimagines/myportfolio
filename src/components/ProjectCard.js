import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  url,
  report_url,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="banner" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <div className="project_links">
        <a href={url} className="weblink">
          <i class="ri-link"></i> Site
        </a>
        <a href={report_url} className="report">
          <i class="ri-file-list-3-line"></i> Report
        </a>
      </div>
    </Col>
  );
};
