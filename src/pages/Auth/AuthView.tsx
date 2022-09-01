import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthLogic from './AuthLogic';
import { IUserStateAuth } from '@store/user/slice';
import { Button, ErrorTitle } from '@atoms/index';

export interface IAuthProps {
  authData: IUserStateAuth;
  cancelAuthHandler: () => void;
}

const AuthView: React.FC<IAuthProps> = ({ authData, cancelAuthHandler }) => {
  const cancelBtnHandler = () => {
    cancelAuthHandler();
  };

  return (
    <div>
      <div>Authorization</div>

      <div>
        <h1>Auth by github: </h1>
        {authData.isLoading ? (
          <>
            <div>Loading...</div>
            <Button data-testid={'cancel-login-btn'} onClick={cancelBtnHandler}>
              Cancel login
            </Button>
          </>
        ) : (
          <a
            data-testid={'auth-by-github-link'}
            href="https://github.com/login/oauth/authorize?client_id=Iv1.da154f760a9b22b7"
          >
            auth by github
          </a>
        )}
        {authData.error && (
          <ErrorTitle data-testid={'error-title-login'}>{authData.error}</ErrorTitle>
        )}
      </div>
    </div>
  );
};

export default AuthLogic(AuthView);
