import React from "react";
import "./QuestionList.css";

export default function Questionlist({
  quest1ons,
  options,
  handleClick,
  currentAnswer,
}) {
  return (
    <div>
      <h2>{quest1ons}</h2>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleClick(option)}
            className={currentAnswer === option ? "Selected" : ""}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
