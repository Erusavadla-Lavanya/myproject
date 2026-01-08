
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface AuthState {
  isAuthenticated: boolean;
}

interface LoginPayload {
  email: string;
  password: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

const USER = {
  email: "admin@gmail.com",
  password: "Lavanya@09",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      const { email, password } = action.payload;

      if (email === USER.email && password === USER.password) {
        state.isAuthenticated = true;
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
