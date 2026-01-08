

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Question } from "../type/questionsTypes";

const loadQuestions = (): Question[] => {
  const data = localStorage.getItem("questions");
  return data ? JSON.parse(data) : [];
};
const saveQuestions = (questions: Question[]) => {
  localStorage.setItem("questions", JSON.stringify(questions));
};

const initialState: Question[] = loadQuestions();

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<Question>) => {
      state.push(action.payload);
      saveQuestions(state);
    },

    updateQuestion: (
      state,
      action: PayloadAction<{
        id: string;
        changes: Partial<Question>;
      }>
    ) => {
      const index = state.findIndex((q) => q.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload.changes };
        saveQuestions(state);
      }
    },

    deleteQuestion: (state, action: PayloadAction<string>) => {
      const updated = state.filter((q) => q.id !== action.payload);
      saveQuestions(updated);
      return updated;
    },
  },
});

export const { addQuestion, updateQuestion, deleteQuestion } =
  questionsSlice.actions;

export default questionsSlice.reducer;
