// src/components/Result.js
import React from "react";

const Result = ({ score, total }) => {
  return (
    <div className="result">
      <h2>Your Score</h2>
      <p>
        {score} out of {total}
      </p>
    </div>
  );
};

export default Result;
