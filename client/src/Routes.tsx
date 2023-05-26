export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  CREATE_SURVEY: '/create-survey',
  MODIFY_SURVEY: (id: number | ':id') => `/modify-survey/${id}`,
  SURVEY: (id: string | ':id') => `/modify-survey/${id}`,
  MY_SURVEYS: '/my-surveys',
  ANSWERS: '/answers',
};
