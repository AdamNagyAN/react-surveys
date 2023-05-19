import authClient from '../../service/auth/authClient';
import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import type LoginRequestDto from '../../service/auth/dto/LoginRequestDto';
import { type AxiosResponse } from 'axios';
import LoginResponseDto from '../../service/auth/dto/LoginResponseDto';

export const AUTH_LOGIN_KEY = 'auth-login';

const useLogin = (): UseMutationResult<
  AxiosResponse<LoginResponseDto>,
  unknown,
  LoginRequestDto
> =>
  useMutation((request) => authClient.login(request), {
    mutationKey: [AUTH_LOGIN_KEY],
  });

export default useLogin;
