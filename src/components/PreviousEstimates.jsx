import "../styles/prevEstimates.css";
import CanvasDraw from "react-canvas-draw";
import mapBackground from "../assets/map_background_crop.png";
import React from "react";

export default function PreviousEstimates(props) {
  const prevEstimates = props.lawnSizeEstimates.map((estimate, idx) => {
    return (
      <div key={idx} className="prev-estimate-container">
        <h1 className="estimate">{estimate}</h1>
        <CanvasDraw
          canvasWidth={100}
          canvasHeight={100}
          imgSrc={mapBackground}
          disabled
          hideGrid
          saveData={localStorage.getItem(`savedDrawing${idx}`)}
        />
      </div>
    );
  });
  return (
    <div className="prev-estimates-container">
      <h1>Previous Estimates</h1>
      {prevEstimates}
    </div>
  );
}
