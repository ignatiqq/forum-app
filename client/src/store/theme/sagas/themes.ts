import { AppThemes } from '@constants/theme';
import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery, put, call } from 'redux-saga/effects';

import { changeTheme } from '../slice';

export function* changeAppThemeHandler(action: PayloadAction<AppThemes>) {
  yield put(changeTheme(action.payload));
  yield call(localStorage.setItem as any, action.payload);
}

export function* changeAppThemeWatcher() {
  yield takeEvery(changeTheme, changeAppThemeHandler);
}
