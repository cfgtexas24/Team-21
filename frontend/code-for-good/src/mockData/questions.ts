import { Question } from "@/types/Types";
export const mockQuestions: Question[] = [
  {
    body: "What percentage of your income is recommended to save for future goals?",
    answers: ["5%", "10%", "20%", "50%"],
    correctAnswer: 2, // 20% is the correct answer
  },
  {
    body: "What is a budget?",
    answers: [
      "A plan for how you will spend your money",
      "A way to increase your income",
      "An app to invest in stocks",
      "A savings account with a bank",
    ],
    correctAnswer: 0, // "A plan for how you will spend your money" is the correct answer
  },
  {
    body: "Which of these is the safest place to store your savings?",
    answers: [
      "Under your mattress",
      "A piggy bank",
      "A bank account",
      "In your wallet",
    ],
    correctAnswer: 2, // "A bank account" is the correct answer
  },
  {
    body: "Why is it important to have an emergency fund?",
    answers: [
      "To buy new gadgets",
      "To pay for unexpected expenses",
      "To invest in stocks",
      "To go on vacation",
    ],
    correctAnswer: 1, // "To pay for unexpected expenses" is the correct answer
  },
  {
    body: "What is the purpose of a credit score?",
    answers: [
      "To track how much money you have",
      "To evaluate your ability to repay loans",
      "To determine your yearly income",
      "To measure your financial goals",
    ],
    correctAnswer: 1, // "To evaluate your ability to repay loans" is the correct answer
  },
];
