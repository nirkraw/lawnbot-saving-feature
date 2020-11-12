import "../styles/App.css";
import Map from "./Map";
import PreviousProjects from "./PreviousProjects";
import CanvasDraw from "react-canvas-draw";
import mapBackground from "../assets/map_background_crop.png";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawings: [],
    };
  }

  addDrawing = (newDrawing) => {
    let newDrawings = this.state.drawings.push(newDrawing)
    this.setState({ drawings: newDrawings });
  };

  createPrevProjects = () => {
    return this.state.drawings.map((drawing) => {
      return (
        <div className="prev-drawing-container">
          <h1>{drawing[1]}</h1>
          <CanvasDraw
            canvasWidth={100}
            canvasHeight={100}
            imgSrc={mapBackground}
            disabled
            hideGrid
            ref={(canvasDraw) => (this.loadableCanvas = canvasDraw)}
            saveData={localStorage.getItem(`savedDrawing${drawing[0]}`)}
          />
        </div>
      );
      
    });
  };

  render() {
    const prevProjects = this.createPrevProjects();
    return (
      <div className="App">
        <Map
          numDrawings={this.state.drawings.length}
          addDrawings={this.addDrawing}
        />
        <PreviousProjects prevProjects={prevProjects} />
      </div>
    );
  }
}
