import "../styles/App.css";
import Map from "./Map";
import PreviousEstimates from "./PreviousEstimates";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lawnSizeEstimates: []
    };
  }
  addLawnSizeEstimate = (lawnSizeEstimate) => {
    this.setState({
      lawnSizeEstimates: this.state.lawnSizeEstimates.concat(lawnSizeEstimate),
    });
  };

  render() {
    return (
      <div className="App">
        <Map
          lawnSizeEstimates={this.state.lawnSizeEstimates}
          addLawnSizeEstimate={this.addLawnSizeEstimate}
        />
        {this.state.lawnSizeEstimates.length !== 0 ? (
          <PreviousEstimates
            lawnSizeEstimates={this.state.lawnSizeEstimates}
          />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
