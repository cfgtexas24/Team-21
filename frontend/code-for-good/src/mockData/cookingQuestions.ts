import { Question } from "@/types/Types";

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
