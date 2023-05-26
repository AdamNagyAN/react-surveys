import LoginResponseDto from '../service/auth/dto/LoginResponseDto';

const setUser = (user: LoginResponseDto) => {
  localStorage.setItem('user', JSON.stringify(user));
};

const getUser = (): LoginResponseDto | undefined => {
  const user = localStorage.getItem('user');
  if (user) {
    return JSON.parse(user);
  }
  return undefined;
};

const removeUser = () => {
  localStorage.removeItem('user');
};

const userLocalStorage = {
  setUser,
  getUser,
  removeUser,
};

export default userLocalStorage;
