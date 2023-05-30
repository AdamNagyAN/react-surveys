export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  CREATE_SURVEY: '/create-survey',
  MODIFY_SURVEY: (id: number | ':id') => `/modify-survey/${id}`,
  SURVEY: (hash: string | ':hash') => `/survey/${hash}`,
  MY_SURVEYS: '/my-surveys',
  ANSWERS: '/answers',
};
