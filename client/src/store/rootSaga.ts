import { all, spawn } from 'redux-saga/effects';

import { changeAppThemeWatcher } from './theme/sagas';
import { loginFlowWatcher } from './user/sagas';

function* rootSaga() {
  yield all([spawn(changeAppThemeWatcher), spawn(loginFlowWatcher)]);
}

export default rootSaga;
