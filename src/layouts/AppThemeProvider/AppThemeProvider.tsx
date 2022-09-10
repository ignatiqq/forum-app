import React from 'react';
import { ThemeProvider } from 'styled-components';

import { AppThemes } from '@constants/theme';
import { getAppTheme } from '@styles/theme';

interface IAppThemeProviderProps {
  children: React.ReactElement;
  theme: AppThemes;
}

const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({
  children,
  theme = AppThemes.Light
}) => {
  return <ThemeProvider theme={getAppTheme(theme)}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
