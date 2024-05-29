declare interface Choice {
  content: string;
  percent: number;
}

declare interface AIAnswer {
  choiceId: number;
  reason: string;
}

declare interface Question {
  questionId: number;
  createdAt: string;
  title: string;
  userNickname: string;
  answerCount: number;
  content: string;
  choices: Choice[];
  aiAnswer: AIAnswer;
}
