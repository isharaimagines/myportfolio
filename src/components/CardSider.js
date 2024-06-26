import React from "react";

class CardSider extends React.Component {
  render() {
    return (
      <div className="card-sider">
        <div className="image_slider">
          <img src={this.props.imgSrc} alt="now" />
        </div>
        <div className="text">
          <sub>{this.props.subText}</sub>
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
        </div>
        <div
          className="types_box"
          style={{ background: this.props.backgroundColor }}
        >
          <div className="box_cart">
            <h1>{this.props.proficiency}</h1>
            <p>Proficiency</p>
          </div>
          <div className="box_cart">
            <h1>{this.props.projects}</h1>
            <p>Projects</p>
          </div>
          <div className="box_cart">
            <h1>{this.props.achievements}</h1>
            <p>Achievements</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CardSider;
