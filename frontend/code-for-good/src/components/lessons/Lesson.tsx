import Navbar2 from "../Navbar2";
import { Question, Resource } from "@/types/Types";
import { Text } from "@chakra-ui/react";
import Quiz from "./Quiz";
interface LessonProps {
  topic: string;
  questions: Question[];
  resources: Resource[];
  // resources
}

const Lesson = ({ topic, questions, resources }: LessonProps) => {
  return (
    <div className="">
      <Navbar2 />
      <div className="container h-screen">
        <Text fontSize="xl" className="flex justify-center p-5">
          {topic}
        </Text>
        <div className="container mx-auto w-1/2">
          <Quiz topic={topic} questions={questions} resources={resources} />
        </div>
      </div>
    </div>
  );
};

export default Lesson;
