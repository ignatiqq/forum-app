import React, { useEffect } from 'react';

import { AppThemeProvider, Container, Header } from '@layouts/index';
import { AppThemes } from '@constants/theme';
import { useAppDispatch, useAppSelector } from './store';
import { changeTheme } from './store/theme/slice';
import AppRoutes from '@routes/Routes';
import { getUserInfo } from "@store/user/actions";

const App = () => {
  const { colorTheme, auth } = useAppSelector(({ themeSlice, userSlice }) => ({
    colorTheme: themeSlice.theme.value,
    auth: userSlice.auth
  }));

  const dispatch = useAppDispatch();

  const changeAppThemeHandler = () => {
    if (colorTheme === AppThemes.Dark) {
      dispatch(changeTheme(AppThemes.Light));
    } else {
      dispatch(changeTheme(AppThemes.Dark));
    }
  };

  useEffect(() => {
    if(auth.data?.refresh_token) {
      dispatch(getUserInfo());
    }
  }, [auth.data]);

  return (
    <AppThemeProvider theme={colorTheme}>
      <Container>
        <Header />
        <AppRoutes />
      </Container>
    </AppThemeProvider>
  );
};

export default App;
