import React, { Component } from "react";
import "../styles/prevProject.css";


export default class PreviousProjects extends Component {
  constructor() {
    super();
    this.state = {
      isHovered: false,
    };
  }

  handleHover = () => {
    this.setState((prevState) => ({
      isHovered: !prevState.isHovered,
    }));
  };

  render() {
    let hoverClass = this.state.isHovered
      ? "prev-projects-container hover"
      : "prev-projects-container";
    return (
      <div
        className={hoverClass}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
    
      </div>
    );
  }
}
