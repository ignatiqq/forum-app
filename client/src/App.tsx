import React from 'react';

import { AppThemeProvider, Container, Header } from '@layouts/index';
import { AppThemes } from '@constants/theme';
import { useAppDispatch, useAppSelector } from './store';
import { changeTheme } from './store/theme/slice';
import AppRoutes from '@routes/Routes';

const App = () => {
  const { colorTheme } = useAppSelector(({ themeSlice }) => ({
    colorTheme: themeSlice.theme.value
  }));

  const dispatch = useAppDispatch();

  const changeAppThemeHandler = () => {
    if (colorTheme === AppThemes.Dark) {
      dispatch(changeTheme(AppThemes.Light));
    } else {
      dispatch(changeTheme(AppThemes.Dark));
    }
  };

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
