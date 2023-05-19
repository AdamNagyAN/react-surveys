import AppLevelProviders from './AppLevelProviders';
import AppRoutes from './AppRoutes';
import AppWrapper from './AppWrapper';

const App = () => {
  return (
    <AppLevelProviders>
      <AppWrapper>
        <AppRoutes />
      </AppWrapper>
    </AppLevelProviders>
  );
};

export default App;
