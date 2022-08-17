import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { AppThemes } from "@constants/theme";
import { LocalStorageKeys } from "@constants/storages/localStorage";

interface IThemeState {
    theme: {
        value: AppThemes
    }
}

const getSavedTheme = AppThemes.Light || (JSON.parse(localStorage.getItem(LocalStorageKeys.Theme) || AppThemes.Light) as AppThemes);

const initialState: IThemeState = {
    theme: {
        value: getSavedTheme
    }
}

const themeSlice = createSlice({
    name: "themeSlice",
    initialState,
    reducers: {
        changeTheme(state, action: PayloadAction<AppThemes>) {
            state.theme.value = action.payload
        }
    }
})

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;