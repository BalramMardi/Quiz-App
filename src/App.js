// src/App.js
import React from "react";
import Quiz from "./components/Quiz";
import { Toaster } from "react-hot-toast";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Toaster position="top-center" toastOptions={{ duration: 1000 }} />

      <h1>MCQ Game</h1>
      <Quiz />
    </div>
  );
};

export default App;
