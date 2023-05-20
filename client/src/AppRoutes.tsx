import { ROUTES } from './Routes';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import RegisterPage from './pages/register/RegisterPage';
import LoginPage from './pages/login/LoginPage';
import ProtectedRoute from './components/molecules/ProtectedRoute';
import MySurveysPage from './pages/my-surveys/MySurveysPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route
        path={ROUTES.MY_SURVEYS}
        element={
          <ProtectedRoute>
            <MySurveysPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.ANSWERS}
        element={
          <ProtectedRoute>
            <div>Answers</div>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
