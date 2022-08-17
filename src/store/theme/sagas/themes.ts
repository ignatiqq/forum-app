import { AppThemes } from "@constants/theme";
import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery, put, call } from "redux-saga/effects";

import { changeTheme } from "../slice";

function* changeAppThemeHandler(action: PayloadAction<AppThemes>) {
    console.log(action);
    yield put(changeTheme(action.payload));
    yield call(localStorage.setItem as any, action.payload);
}

export function* changeAppThemeWatcher() {
    yield takeEvery(changeTheme, changeAppThemeHandler)
}