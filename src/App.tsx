import React, { useState } from 'react';

import { AppThemeProvider, Container, Header } from "@layouts/index";
import { LocalStorageKeys } from "@constants/storages/localStorage";
import { AppThemes } from '@constants/theme';

const initialTheme = (localStorage.getItem(LocalStorageKeys.Theme) as AppThemes | null) || AppThemes.Light

const App = () => {
  const [theme, setTheme] = useState<AppThemes>(initialTheme);

  const changeThemeHandler = (theme: AppThemes) => {
    setTheme(theme);
    localStorage.setItem(LocalStorageKeys.Theme, JSON.stringify(theme));
  }

  return (
    <AppThemeProvider theme={theme}>
      <Container>
        <Header />
      </Container>
    </AppThemeProvider>
  )
}

export default App;