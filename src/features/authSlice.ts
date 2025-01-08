import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: any;
  authedUser: string | null;
}

const initialState: AuthState = {
  authedUser: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthedUser: (state, action: PayloadAction<string>) => {
      state.authedUser = action.payload;
    },
    logoutAuthedUser: (state) => {
      state.authedUser = null;
    }
  }
});

export const { setAuthedUser, logoutAuthedUser } = authSlice.actions;
export default authSlice.reducer;