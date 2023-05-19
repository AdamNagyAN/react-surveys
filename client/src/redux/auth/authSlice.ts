import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import LoginResponseDto from '../../service/auth/dto/LoginResponseDto';

interface AuthState {
  user: LoginResponseDto | undefined;
}

const initialState: AuthState = {
  user: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<LoginResponseDto>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = undefined;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
