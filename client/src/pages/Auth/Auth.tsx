import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AuthLogic from './AuthLogic';

const Auth: React.FC = () => {
  return (
    <div>
      <div>Authorization</div>

      <div>
        <h1>Auth by github: </h1>
        <a href="https://github.com/login/oauth/authorize?client_id=Iv1.da154f760a9b22b7">
          auth by github
        </a>
      </div>
    </div>
  );
};

export default AuthLogic(Auth);
