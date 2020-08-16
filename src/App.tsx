import React from 'react';
import Global from './styles/global';
// import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Signin from './pages/Signin';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{name: 'Diego'}}>
      <Signin />
    </AuthContext.Provider>
      <Global />
  </>
);

export default App;
