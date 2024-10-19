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
import { Question } from "@/types/Types";

interface QuizQuestionProps {
  key: number;
  id: number;
  question: Question;
  handleAnswer: (answer: number) => void;
}

const QuizQuestion = ({
  id,
  key,
  question,
  handleAnswer,
}: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number>(0);
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Question {id + 1}</Heading>
      </CardHeader>
      <CardBody>
        <form
          id={"q-" + key}
          className="quiz-question quiz-container rounded-md border-solid border-black"
        >
          <p className="question-body">{question.body}</p>
          {question.video && (
            <iframe
              className="p-10"
              width="560"
              height="315"
              src={question.video}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          )}
          <FormControl>
            <RadioGroup defaultValue={question.answers[0]}>
              <Stack direction="column">
                {question.answers.map((answer, index) => {
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
                bg="#002982"
                color="white"
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
