import React from 'react';
import { render } from '@testing-library/react';

import { theme } from '@styles/theme';
import AppThemeProvider from '@layouts/AppThemeProvider/AppThemeProvider';

const renderWithTheme = ({ component }) =>
  render(<AppThemeProvider theme={theme}>{component}</AppThemeProvider>);

export default renderWithTheme;
