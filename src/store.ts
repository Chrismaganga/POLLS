import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import userSlice from "./features/userSlice";
import questionSlice from "./features/questions";

const reducer = {
    auth: authSlice,
    users: userSlice,
    questions: questionSlice
  
};

export const setupStore = (preloadedState?: undefined) => {
    return configureStore({ reducer, preloadedState });
};

export const store = setupStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;