import "../styles/map.css";
import CanvasDraw from "react-canvas-draw";
import mapBackground from "../assets/map_background_crop.png";
import trash from "../assets/trash.png";
import React, { Component } from "react";

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      realEstateSize: 3000,
    };
  }

  saveAndClearMap = () => {
    localStorage.setItem(
      `savedDrawing${this.props.numLawnSizeEstimates}`,
      this.saveableCanvas.getSaveData()
    );
    this.saveableCanvas.clear();
    this.props.addLawnSizeEstimate(this.state.realEstateSize);
    
  };

  render() {
    return (
      <div id="map">
        <CanvasDraw
          ref={(canvasDraw) => (this.saveableCanvas = canvasDraw)}
          brushColor="#7CFC00"
          brushRadius="18"
          imgSrc={mapBackground}
          canvasWidth={600}
        />
        <img
          id="trash-icon"
          src={trash}
          alt="trash"
          onClick={this.saveAndClearMap}
        />
      </div>
    );
  }
}
