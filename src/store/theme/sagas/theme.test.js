import { AppThemes } from '@constants/theme';
import { expectSaga } from 'redux-saga-test-plan';

import { changeAppThemeHandler } from '.';
import { changeTheme } from '../slice';

describe('test themes sagas', () => {
  test('change theme flow test', () => {
    expectSaga(changeAppThemeHandler, AppThemes.Dark).put(changeTheme(AppThemes.Dark)).run();
  });
});