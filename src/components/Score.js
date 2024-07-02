// src/components/Score.js
import React from "react";

const Score = ({ score }) => {
  return (
    <div className="score">
      <h2>Current Score: {score}</h2>
    </div>
  );
};

export default Score;
