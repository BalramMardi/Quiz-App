// src/components/Quiz.js
import React, { useState, useEffect } from "react";
import Question from "./Question";
import Result from "./Result";
import Score from "./Score";
import questionsData from "../questions";
import toast, { Toaster } from "react-hot-toast";
import _ from "lodash";

let totalQuestions = 10;

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    // Shuffle questions using lodash
    setQuestions(_.shuffle(questionsData));
  }, []);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
      toast.success("Correct!");
    } else {
      toast.error("Wrong!");
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  if (questions.length === 0) {
    return <div>Loading...</div>; // Show loading until questions are set
  }

  return (
    <div className="quiz">
      {showResult ? (
        <Result score={score} total={totalQuestions} />
      ) : (
        <>
          <Score score={score} />
          <Question
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            onAnswer={handleAnswer}
            questionNumber={currentQuestion + 1}
          />
        </>
      )}
    </div>
  );
};

export default Quiz;
