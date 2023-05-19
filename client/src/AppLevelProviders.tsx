import React from 'react';
import { ToastBarProvider } from './components/molecules/toast/ToastBarProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface AppLevelProvidersProps {
  children: React.ReactNode;
}

const AppLevelProviders: React.FC<AppLevelProvidersProps> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ToastBarProvider>{children}</ToastBarProvider>
    </QueryClientProvider>
  );
};

export default AppLevelProviders;
