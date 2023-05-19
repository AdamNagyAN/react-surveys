import React from 'react';
import { ToastBarProvider } from './components/molecules/toast/ToastBarProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './redux/store';

interface AppLevelProvidersProps {
  children: React.ReactNode;
}

const AppLevelProviders: React.FC<AppLevelProvidersProps> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ToastBarProvider>{children}</ToastBarProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default AppLevelProviders;
