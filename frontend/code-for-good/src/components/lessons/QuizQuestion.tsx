import React, { useState } from "react";
import {
  FormControl,
  RadioGroup,
  Stack,
  Radio,
  Button,
  Card,
  CardHeader,
  Heading,
  CardBody,
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
    <Card maxW="md">
      <CardHeader>
        <Heading size="md">Question {id + 1}</Heading>
      </CardHeader>
      <CardBody>
        <form
          id={"q-" + key}
          className="quiz-question quiz-container rounded-md border-solid border-black"
        >
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
            <div className="grid justify-items-end">
              <Button
                onClick={() => {
                  console.log("clicked next");
                  handleAnswer(selectedAnswer);
                }}
              >
                {"Next"}
              </Button>
            </div>
          </FormControl>
        </form>
      </CardBody>
    </Card>
  );
};

export default QuizQuestion;
