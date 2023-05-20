interface LoginResponseDto {
  accessToken: string;
  authentication: Authentication;
  user: UserDto;
}

export interface Authentication {
  strategy: string;
  payload: Payload;
}

export interface Payload {
  iat: number;
  exp: number;
  aud: string;
  sub: string;
  jti: string;
}

export interface UserDto {
  id: number;
  email: string;
  fullname: string;
}

export default LoginResponseDto;
