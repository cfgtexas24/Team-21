import React, { useState } from "react";
import QuizQuestion from "./QuizQuestion";
import { IQuestion } from "@/types/Types";

interface QuizProps {
  questions: IQuestion[];
}

const Quiz = ({ questions }: QuizProps) => {
  const [score, setScore] = useState<number>(0);
  const [active, setActive] = useState<number>(0);

  const handleAnswer = (answer: number) => {
    if (questions[active].correctAnswer === answer) {
      setScore(score + 1);
    }
    setActive(active + 1);
  };

  if (active >= questions.length) {
    return (
      <div className="quiz-end-screen">
        <p>Score: {score + "/" + questions.length}</p>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      {questions.map((question, index) => {
        if (index === active) {
          return (
            <QuizQuestion
              key={index}
              id={index}
              question={question.body}
              answers={question.answers}
              correctAnswer={question.correctAnswer}
              handleAnswer={handleAnswer}
            ></QuizQuestion>
          );
        }
      })}
    </div>
  );
};

export default Quiz;
