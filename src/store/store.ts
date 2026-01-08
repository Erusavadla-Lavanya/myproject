import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/authSlice";
import questionsReducer from "../slice/questionsSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    questions: questionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
