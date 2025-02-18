import React, { useState } from "react";
import Questionlist from "./Questionlist";

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const quiz = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean",
      ],
      answer: "Pacific Ocean",
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: [
        "Charles Dickens",
        "William Shakespeare",
        "Mark Twain",
        "Leo Tolstoy",
      ],
      answer: "William Shakespeare",
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["O2", "H2O", "CO2", "NaCl"],
      answer: "H2O",
    },
  ];

  console.log(quiz);

  const handlenext = () => {
    if (currentQuestionIndex < quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentAnswer(null);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setQuizFinished(false);
  };

  const handleClick = (option) => {
    setCurrentAnswer(option);
    if (option === quiz[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
  };

  return (
    <div>
      {quizFinished ? (
        <>
          <h1>Quiz Finished</h1>
          <h3>Your Score is {score}</h3>
          <button onClick={handleRestart}>Restart Quiz</button>
        </>
      ) : (
        <>
          <Questionlist
            quest1ons={quiz[currentQuestionIndex].question}
            options={quiz[currentQuestionIndex].options}
            handleClick={handleClick}
            currentAnswer={currentAnswer}
          />
          <button onClick={handlenext} disabled={!currentAnswer}>
            Next question
          </button>
        </>
      )}
    </div>
  );
}
