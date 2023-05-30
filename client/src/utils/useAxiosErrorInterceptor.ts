import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../Routes';
import axiosBase from '../service/axiosBase';
import { useToastBar } from '../components/molecules/toast/ToastBarProvider';
import { type ErrorDto } from './utils';

const useAxiosErrorInterceptor = (): void => {
  const navigate = useNavigate();
  const toastBar = useToastBar();
  const interceptor = React.useCallback(
    async (error: any) => {
      if (!error?.response?.status) {
        toastBar({
          title: 'General Error',
          message: 'Unexpected error happened',
          open: true,
        });
        return await Promise.reject(error);
      }
      if (error.response?.status === 401) {
        navigate(ROUTES.LOGIN);
      }
      const errorDto = error.response.data as ErrorDto;
      toastBar({
        title: errorDto.name,
        message: errorDto.message,
        open: true,
      });
      return await Promise.reject(error);
    },
    [toastBar]
  );

  React.useEffect(() => {
    const addedInterceptor = axiosBase.interceptors.response.use(
      (res) => res,
      interceptor
    );
    return () => {
      axiosBase.interceptors.response.eject(addedInterceptor);
    };
  }, [interceptor]);
};

export default useAxiosErrorInterceptor;
