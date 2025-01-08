import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Key, ReactNode } from "react";

export interface UserState {
  name: ReactNode;
  id: Key | null | undefined;
  answers: Record<string, string>;
  questions: string[];
}

export interface UsersState {
  [key: string]: UserState;
}

const initialState: UsersState = {};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    receiveUsers: (state, action: PayloadAction<UsersState>) => {
      return action.payload;
    },
    addAnswerToUser: (
      state,
      action: PayloadAction<{ authedUser: string; qid: string; answer: string }>
    ) => {
      const { authedUser, qid, answer } = action.payload;
      state[authedUser].answers[qid] = answer;
    },
    addQuestionToUser: (
      state,
      action: PayloadAction<{ authedUser: string; qid: string }>
    ) => {
      const { authedUser, qid } = action.payload;
      state[authedUser].questions.push(qid);
    },
  },
});

export const { receiveUsers, addAnswerToUser, addQuestionToUser } = usersSlice.actions;
export default usersSlice.reducer;