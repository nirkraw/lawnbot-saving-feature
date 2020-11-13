import React, { Component } from "react";
import "../styles/prevEstimates.css";

export default class PreviousEstimates extends Component {
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
    // let hoverClass = this.state.isHovered
    //   ? "prev-estimates-container hover"
    //   : "prev-estimates-container";
    return (
      <div
        className="prev-estimates-container"
        // onMouseEnter={this.handleHover}
        // onMouseLeave={this.handleHover}
      >
        <h1>Previous Estimates</h1>
        {this.props.prevEstimates}
      </div>
    );
  }
}
