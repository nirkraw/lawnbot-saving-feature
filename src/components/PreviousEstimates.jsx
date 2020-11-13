import React, { Component } from "react";
import "../styles/prevEstimates.css";

export default class PreviousEstimates extends Component {
  render() {
    return (
      <div
        className="prev-estimates-container"
      >
        <h1>Previous Estimates</h1>
        {this.props.prevEstimates}
      </div>
    );
  }
}
