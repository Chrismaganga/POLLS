import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Answer {
  votes: string[];
}

interface Question {
  id: string;
  [key: string]: Answer | any;
}

interface QuestionsState {
  [key: string]: Question;
}

const initialState: QuestionsState = {};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    receiveQuestions: (state, action: PayloadAction<QuestionsState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    addQuestion: (state, action: PayloadAction<Question>) => {
      const question = action.payload;
      state[question.id] = question;
    },
    addAnswer: (
      state,
      action: PayloadAction<{
        qid: string;
        answer: string;
        authedUser: string;
      }>
    ) => {
      const { qid, answer, authedUser } = action.payload;
      state[qid][answer].votes.push(authedUser);
    },
  },
});

export const { receiveQuestions, addQuestion, addAnswer } = questionsSlice.actions;
export default questionsSlice.reducer;
