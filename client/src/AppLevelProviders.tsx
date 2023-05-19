import React from 'react';
import { ToastBarProvider } from './components/molecules/toast/ToastBarProvider';

interface AppLevelProvidersProps {
  children: React.ReactNode;
}

const AppLevelProviders: React.FC<AppLevelProvidersProps> = ({ children }) => {
  return <ToastBarProvider>{children}</ToastBarProvider>;
};

export default AppLevelProviders;
