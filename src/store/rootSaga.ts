import { all, spawn } from 'redux-saga/effects';

import { changeAppThemeWatcher } from './theme/sagas';
import { loginFlowWatcher } from './user/sagas';
import { initAppRequestsWatcher } from './app/sagas';

function* rootSaga() {
  yield all([spawn(changeAppThemeWatcher), spawn(loginFlowWatcher), spawn(initAppRequestsWatcher)]);
}

export default rootSaga;
