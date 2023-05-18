import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from './Routes';
import { RouterProvider } from 'react-router-dom';
import AppLevelProviders from '../AppLevelProviders';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppLevelProviders>
      <RouterProvider router={router} />
    </AppLevelProviders>
  </React.StrictMode>
);
