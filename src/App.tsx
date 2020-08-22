import React from 'react';
import Global from './styles/global';
import SignUp from './pages/SignUp';
import Signin from './pages/Signin';
import ToastContainer from './components/ToastContainer';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Signin />
    </AuthProvider> 
    <ToastContainer />
      <Global />
  </>
);

export default App;
