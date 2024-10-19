export interface Question {
  body: string;
  answers: string[];
  correctAnswer: number;
  video?: string;
}

export interface Resource {
  name: string;
  link: string;
}
