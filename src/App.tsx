import React from 'react';
import Global from './styles/global';
import SignUp from './pages/SignUp';
import Signin from './pages/Signin';
import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <Signin />
    </AppProvider>

    <Global />
  </>
);

export default App;
