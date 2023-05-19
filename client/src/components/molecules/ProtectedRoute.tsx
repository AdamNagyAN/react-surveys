import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import store from '../../redux/store';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useSelector(
    (state: ReturnType<typeof store.getState>) => state.auth
  );
  return user ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
