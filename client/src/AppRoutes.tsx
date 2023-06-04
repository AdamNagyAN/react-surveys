import { ROUTES } from './Routes';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import RegisterPage from './pages/register/RegisterPage';
import LoginPage from './pages/login/LoginPage';
import ProtectedRoute from './components/molecules/ProtectedRoute';
import MySurveysPage from './pages/my-surveys/MySurveysPage';
import EditSurveyPage from './pages/edit-survey/EditSurveyPage';
import SurveyPage from './pages/survey/SurveyPage';
import ResultPage from './pages/result/ResultPage';

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
        path={ROUTES.CREATE_SURVEY}
        element={
          <ProtectedRoute>
            <EditSurveyPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.MODIFY_SURVEY(':id')}
        element={
          <ProtectedRoute>
            <EditSurveyPage />
          </ProtectedRoute>
        }
      />
      <Route path={ROUTES.SURVEY(':hash')} element={<SurveyPage />} />
      <Route
        path={ROUTES.ANSWERS(':surveyId')}
        element={
          <ProtectedRoute>
            <ResultPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
