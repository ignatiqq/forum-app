import React , { useState } from 'react';

import { ThemeProvider } from "styled-components";
import { getAppTheme } from "@styles/theme";
import { LocalStorageKeys } from "@constants/storages/localStorage";

interface IAppThemeProviderProps {
    children: React.ReactElement
}

const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({children}) => {

    const themeFromStorage: string | null = localStorage.getItem(LocalStorageKeys.Theme);

    const [appTheme, setAppTheme] = useState<string>(themeFromStorage ? themeFromStorage : "light");

    return (
        <ThemeProvider theme={getAppTheme(appTheme)}>
            {children}
        </ThemeProvider>
    )
}

export default AppThemeProvider;