import React from 'react'
import Appstack from './src/Appstack';
import { AuthContainer,useAuth } from './src/Auth';
import AuthStack from './src/AuthStack';


const App = () => {

  return (
    <AuthContainer>
        {({authenticated}) => {
          return authenticated ? <Appstack/> : <AuthStack/>;
        }}
      </AuthContainer>
  );
};

export default App;