export interface User {
  questions: any;
  answers(answers: any): unknown;
  id: string;
  name?: string;
}

export interface Question {
  author: any;
  timestamp: any;
  optionOne: any;
  optionTwo: any;
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
}
