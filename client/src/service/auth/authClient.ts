import axiosBase from '../axiosBase';
import type RegisterRequestDto from './dto/RegisterRequestDto';
import type LoginRequestDto from './dto/LoginRequestDto';
import { AxiosPromise } from 'axios';
import LoginResponseDto from './dto/LoginResponseDto';

const login = async (
  request: LoginRequestDto
): AxiosPromise<LoginResponseDto> => {
  return axiosBase.post('/authentication', { ...request, strategy: 'local' });
};

const register = async (request: RegisterRequestDto): AxiosPromise<void> => {
  return axiosBase.post('/users', request);
};

const authClient = {
  login,
  register,
};

export default authClient;
