import useAxiosErrorInterceptor from './utils/useAxiosErrorInterceptor';
import useAxiosUserTokenInterceptor from './utils/useAxiosUserTokenInterceptor';
import useLoadUserFromStorage from './utils/useLoadUserFromStorage';

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  useLoadUserFromStorage();
  useAxiosErrorInterceptor();
  const isUserTokenInterceptorLoaded = useAxiosUserTokenInterceptor();

  if (!isUserTokenInterceptorLoaded) return null;

  return <>{children}</>;
};

export default AppWrapper;
