import "../styles/App.css";
import Map from "./Map";
import PreviousEstimates from "./PreviousEstimates";
import CanvasDraw from "react-canvas-draw";
import mapBackground from "../assets/map_background_crop.png";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lawnSizeEstimates: [],
    };
  }

  addLawnSizeEstimate = (lawnSizeEstimate) => {
    this.setState({ lawnSizeEstimates: this.state.lawnSizeEstimates.concat(lawnSizeEstimate)});
  };

  createPrevEstimates = () => {
    return this.state.lawnSizeEstimates.map((estimate, i) => {
      return (
        <div key={i} className="prev-estimate-container">
          <h1>{estimate}</h1>
          <CanvasDraw
            canvasWidth={100}
            canvasHeight={100}
            imgSrc={mapBackground}
            disabled
            hideGrid
            saveData={localStorage.getItem(`savedDrawing${i}`)}
          />
        </div>
      );
    });
  };

  render() {
    const prevEstimates = this.createPrevEstimates();
    return (
      <div className="App">
        <Map
          numLawnSizeEstimates={this.state.lawnSizeEstimates.length}
          addLawnSizeEstimate={this.addLawnSizeEstimate}
        />
        <PreviousEstimates prevEstimates={prevEstimates} />
      </div>
    );
  }
}
