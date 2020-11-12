import React, { Component } from "react";
import "../styles/map.css";
import CanvasDraw from "react-canvas-draw";
import mapBackground from "../assets/map_background_crop.png"
import trash from "../assets/trash.png"

export default class Map extends Component {
  saveAndClearMap = () => {
    localStorage.setItem("savedDrawing", this.saveableCanvas.getSaveData());
    this.saveableCanvas.clear();
    // this.loadableCanvas.loadSaveData(localStorage.getItem("savedDrawing"));
  }  

  render() {
    return (
      <div id="map">
        <CanvasDraw
          ref={(canvasDraw) => (this.saveableCanvas = canvasDraw)}
          brushColor="#7CFC00"
          imgSrc={mapBackground}
          canvasWidth={600}
        />
        {/* <CanvasDraw
          disabled
          hideGrid
          ref={(canvasDraw) => (this.loadableCanvas = canvasDraw)}
          saveData={localStorage.getItem("savedDrawing")}
        /> */}
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
