import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';
import authClient from '../../service/auth/authClient';
import type RegisterRequestDto from '../../service/auth/dto/RegisterRequestDto';

export const AUTH_REGISTER_KEY = 'auth-register';

const useRegister = (): UseMutationResult<
  AxiosResponse<void>,
  unknown,
  RegisterRequestDto
> =>
  useMutation((request) => authClient.register(request), {
    mutationKey: [AUTH_REGISTER_KEY],
  });

export default useRegister;
