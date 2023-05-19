import useAxiosErrorInterceptor from './utils/useAxiosErrorInterceptor';

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  useAxiosErrorInterceptor();

  return <>{children}</>;
};

export default AppWrapper;
