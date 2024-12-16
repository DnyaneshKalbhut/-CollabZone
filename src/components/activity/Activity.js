import React, { useState } from "react";
import { quizData, groupActivities } from "../../data/SampleQuizData";
import QuizList from "./QuizList";
import "./Activity.css";

function Activity() {
  const [quizName, setQuizName] = useState("");
  const [quizzes, setQuizzes] = useState(quizData);

  // Handle creating a new quiz
  const handleCreateQuiz = () => {
    if (quizName.trim() !== "") {
      const newQuiz = {
        id: quizzes.length + 1,
        name: quizName,
        score: 0, // Default score when creating a new quiz
        group: "My Group",
      };
      setQuizzes([...quizzes, newQuiz]);
      setQuizName(""); // Clear input
    }
  };

  return (
    <div className="activity-container">
      <h2 className="activity-header">Activity Dashboard</h2>

      {/* Create a Quiz */}
      <div className="create-quiz-section">
        <h3>Create a Quiz Test</h3>
        <input
          type="text"
          placeholder="Enter Quiz Name"
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
        />
        <button onClick={handleCreateQuiz}>Create Quiz</button>
      </div>

      {/* My Quiz Tests */}
      <QuizList quizzes={quizzes} />

      {/* Group Activity */}
      <div className="group-activity-section">
        <h3>Group Activity</h3>
        <ul>
          {groupActivities.map((activity) => (
            <li key={activity.id} className="group-activity-item">
              <span>{activity.user}</span> completed{" "}
              <strong>{activity.quiz}</strong> with a score of{" "}
              <strong>{activity.score}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Activity;
