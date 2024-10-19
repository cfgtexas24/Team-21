import React, { useState } from "react";
import {
  FormControl,
  RadioGroup,
  Stack,
  Radio,
  Button,
} from "@chakra-ui/react";

interface QuizQuestionProps {
  key: number;
  id: number;
  question: string;
  answers: string[];
  correctAnswer: number;
  handleAnswer: (answer: number) => void;
}

const QuizQuestion = ({
  id,
  key,
  question,
  answers,
  handleAnswer,
}: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number>(0);
  return (
    <form className="quiz-question quiz-container rounded-md border-solid border-black">
      <p id={"q-" + key}>Question {id + 1}</p>
      <p className="question-body">{question}</p>
      <FormControl>
        <RadioGroup defaultValue={answers[0]}>
          <Stack direction="column">
            {answers.map((answer, index) => {
              return (
                <Radio
                  name={"answer"}
                  key={index}
                  value={answer}
                  onChange={() => {
                    setSelectedAnswer(index);
                  }}
                >
                  {answer}
                </Radio>
              );
            })}
          </Stack>
        </RadioGroup>
        <Button
          className="justify-end"
          onClick={() => {
            console.log("clicked next");
            handleAnswer(selectedAnswer);
          }}
        >
          {"Next"}
        </Button>
      </FormControl>
    </form>
  );
};

export default QuizQuestion;
