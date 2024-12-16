import React from "react";
import "./Activity.css";

function QuizList({ quizzes }) {
  return (
    <div className="quiz-list">
      <h3>My Quiz Tests</h3>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id} className="quiz-item">
            <span className="quiz-name">{quiz.name}</span>
            <span className="quiz-score">Score: {quiz.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizList;
