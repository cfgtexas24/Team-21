import Navbar2 from "../Navbar2";
import { Question, Resource } from "@/types/Types";
import { Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Quiz from "./Quiz";
import { useState } from "react";
interface LessonProps {
  topic: string; // lesson topic
  questions: Question[]; // questions for lesson quiz -- could have a video link associated
  resources: Resource[]; // resources to learn more about the topicis in name, link format
}

// Represents a lesson on a certain topic
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

        <div className="flex justify-start p-5"></div>
        {/* either provides a next lesson or try again button */}
        <div className="flex justify-between p-5">
          {
            <Link to="/skillgame">
              <Button bg="#002982" color="white">
                Back
              </Button>
            </Link>
          }
          {(finished && passed && (
            <Link to="/skillgame">
              <Button bg="#002982" color="white">
                Next Lesson!
              </Button>
            </Link>
          )) ||
            (finished && (
              <Link to="/lesson" onClick={() => window.location.reload()}>
                <Button bg="#002982" color="white">
                  Try Again
                </Button>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Lesson;
