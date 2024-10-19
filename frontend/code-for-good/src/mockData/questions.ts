import { IQuestion } from "@/types/Types";
export const mockQuestions: IQuestion[] = [
  {
    body: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctAnswer: 2, // Paris is the correct answer
  },
  {
    body: "What is 2 + 2?",
    answers: ["3", "4", "5", "6"],
    correctAnswer: 1, // 4 is the correct answer
  },
  {
    body: "Which language is used to style web pages?",
    answers: ["HTML", "JavaScript", "CSS", "Python"],
    correctAnswer: 2, // CSS is the correct answer
  },
  // Add more questions as needed
];
