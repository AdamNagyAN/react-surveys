import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import LoginResponseDto from '../../service/auth/dto/LoginResponseDto';
import userLocalStorage from '../../utils/userLocalStorage';

export interface AuthState {
  user: LoginResponseDto | undefined;
}

const initialState: AuthState = {
  user: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (_state, action: PayloadAction<LoginResponseDto>) => {
      return {
        user: {
          ...action.payload,
        },
      };
    },
    logout: (_state) => {
      userLocalStorage.removeUser();
      return {
        user: undefined,
      };
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
