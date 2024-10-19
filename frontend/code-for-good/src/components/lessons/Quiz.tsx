import React, { useState } from "react";
import QuizQuestion from "./QuizQuestion";
import { Question, Resource } from "@/types/Types";
import ScoreSummary from "./ScoreSummary";
import ProgressBar from "./ProgressBar";

interface QuizProps {
  topic: string; // Quiz topic
  questions: Question[]; // Quiz Questions
  resources: Resource[]; // Quiz Resources
  setPassed: (bool: boolean) => void;
}

const Quiz = ({ topic, questions, resources, setPassed }: QuizProps) => {
  const [score, setScore] = useState<number>(0);
  const [active, setActive] = useState<number>(0);

  const handleAnswer = (answer: number) => {
    if (questions[active].correctAnswer === answer) {
      setScore(score + 1);
    }
    setActive(active + 1);
  };

  if (active >= questions.length) {
    // send score to db
    setPassed(score / questions.length >= 0.7);
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
            <>
              <QuizQuestion
                key={index}
                id={index}
                question={question}
                handleAnswer={handleAnswer}
              ></QuizQuestion>
              <ProgressBar progress={active} total={questions.length} />
            </>
          );
        }
      })}
    </div>
  );
};

export default Quiz;
