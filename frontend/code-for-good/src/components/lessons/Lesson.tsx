import Navbar2 from "../Navbar2";
import { Question, Resource } from "@/types/Types";
import { Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Quiz from "./Quiz";
import { useState } from "react";
interface LessonProps {
  topic: string;
  questions: Question[];
  resources: Resource[];
  // resources
}

const Lesson = ({ topic, questions, resources }: LessonProps) => {
  const [finished, setFinished] = useState<boolean>(false);
  const [passed, setPassed] = useState<boolean>(false);
  return (
    <div className="">
      <Navbar2 />
      <div className="container h-screen">
        <Text fontSize="xl" className="flex justify-center p-5">
          {topic}
        </Text>
        <div className="container mx-auto w-1/2">
          <Quiz
            topic={topic}
            questions={questions}
            resources={resources}
            setPassed={(bool: boolean) => {
              setFinished(true);
              setPassed(bool);
            }}
          />
        </div>

        <div className="flex justify-end p-5">
          {(finished && passed && (
            <Link to="/skillgame">
              <Button colorScheme="teal">Next Lesson!</Button>
            </Link>
          )) ||
            (finished && (
              <Link to="/lesson" onClick={() => window.location.reload()}>
                <Button colorScheme="teal">Try Again!</Button>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Lesson;
