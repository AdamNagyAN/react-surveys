import React from 'react';

interface AppLevelProvidersProps {
  children: React.ReactNode;
}

const AppLevelProviders: React.FC<AppLevelProvidersProps> = ({ children }) => {
  return <>{children}</>;
};

export default AppLevelProviders;
