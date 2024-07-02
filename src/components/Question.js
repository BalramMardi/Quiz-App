// src/components/Question.js
import React from "react";

const Question = ({ question, options, onAnswer, questionNumber }) => {
  return (
    <div className="question">
      <h2>
        Q{questionNumber}. {question}
      </h2>
      <div className="options">
        {options.map((option, index) => (
          <button key={index} onClick={() => onAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
