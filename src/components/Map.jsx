import "../styles/map.css";
import CanvasDraw from "react-canvas-draw";
import mapBackground from "../assets/map_background_crop.png";
import trash from "../assets/trash.png";
import React, { Component } from "react";

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      realEstateSize: 0,
    };
  }
  saveAndClearMap = () => {
    let idx = this.props.lawnSizeEstimates.length;
    localStorage.setItem(
      `savedDrawing${idx}`,
      this.saveableCanvas.getSaveData()
    );
    this.props.addLawnSizeEstimate(this.state.realEstateSize);

    this.saveableCanvas.clear();
    this.setState({ realEstateSize: 0 });
  };

  createRandomEstimate = () => {
    if (this.state.realEstateSize !== 0) {
      this.setState({
        realEstateSize: this.state.realEstateSize + 500,
      });
    } else {
      this.setState({
        realEstateSize: Math.floor(Math.random() * (3500 - 2500) + 2500),
      });
    }
  };

  render() {
    return (
      <div id="map" onMouseUp={this.createRandomEstimate}>
        <h1 className="real-estate-size">{this.state.realEstateSize} sq ft</h1>
        <CanvasDraw
          ref={(canvasDraw) => (this.saveableCanvas = canvasDraw)}
          hideGrid
          brushColor="#7CFC00"
          brushRadius={18}
          imgSrc={mapBackground}
          canvasWidth={550}
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
