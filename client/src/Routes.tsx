import { createBrowserRouter } from 'react-router-dom';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
};

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <div>Hello world!</div>,
  },
]);
