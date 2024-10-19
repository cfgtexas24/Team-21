import React, { useState } from "react";
import QuizQuestion from "./QuizQuestion";
import { Question, Resource } from "@/types/Types";
import ScoreSummary from "./ScoreSummary";

interface QuizProps {
  topic: string;
  questions: Question[];
  resources: Resource[];
}

const Quiz = ({ topic, questions, resources }: QuizProps) => {
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
        <ScoreSummary
          topic={topic}
          score={score}
          total={questions.length}
          resources={resources}
        />
      </div>
    );
  }

  return (
    <div className="quiz-container justify-center">
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
