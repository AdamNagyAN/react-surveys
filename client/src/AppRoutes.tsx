import { ROUTES } from './Routes';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import RegisterPage from './pages/register/RegisterPage';
import LoginPage from './pages/login/LoginPage';
import ProtectedRoute from './components/molecules/ProtectedRoute';

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
            <div>My surveys</div>
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
      <Route
        path={ROUTES.PROFILE}
        element={
          <ProtectedRoute>
            <div>Profile</div>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
