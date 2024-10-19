import { Question } from "@/types/Types";
export const mockFinancialQuestions: Question[] = [
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

export const mockCookingQuestions: Question[] = [
  {
    body: "What is the primary cooking method used in making risotto?",
    answers: ["Baking", "Steaming", "Stirring and simmering", "Grilling"],
    correctAnswer: 2, // "Stirring and simmering" is the correct answer
  },
  {
    body: "Which herb is traditionally used in pesto?",
    answers: ["Basil", "Thyme", "Oregano", "Parsley"],
    correctAnswer: 0, // "Basil" is the correct answer
  },
  {
    body: "What is the purpose of blanching vegetables before freezing them?",
    answers: [
      "To add flavor",
      "To enhance color and texture",
      "To remove nutrients",
      "To make them softer",
    ],
    correctAnswer: 1, // "To enhance color and texture" is the correct answer
  },
  {
    body: "Which type of knife is best for chopping herbs?",
    answers: ["Chef's knife", "Paring knife", "Serrated knife", "Boning knife"],
    correctAnswer: 0, // "Chef's knife" is the correct answer
  },
  {
    body: "What is the main ingredient in a traditional Japanese miso soup?",
    answers: ["Seaweed", "Miso paste", "Tofu", "Fish"],
    correctAnswer: 1, // "Miso paste" is the correct answer
  },
  {
    body: "What is the process called when eggs are cooked in their shells in simmering water until they reach a soft or hard consistency?",
    video: "https://www.youtube.com/embed/MPqnS1K4vgw?si=B2cGFnk0tgqcCkZe",
    answers: ["Poaching", "Boiling", "Scrambling", "Frying"],
    correctAnswer: 1, // "Boiling" is the correct answer
  },
];
