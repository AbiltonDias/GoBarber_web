import React from 'react';
import Global from './styles/global';
import SignUp from './pages/SignUp';
import Signin from './pages/Signin';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Signin />
    </AuthProvider> 
      <Global />
  </>
);

export default App;
