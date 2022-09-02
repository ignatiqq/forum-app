import { all, spawn } from 'redux-saga/effects';

import { changeAppThemeWatcher } from './theme/sagas';
import { loginFlowWatcher } from './user/sagas/auth';
import { initAppRequestsWatcher } from './app/sagas';
import { getUserInfoWatcher } from './user/sagas/info';

function* rootSaga() {
  yield all([
    spawn(changeAppThemeWatcher),
    spawn(loginFlowWatcher),
    spawn(initAppRequestsWatcher),
    spawn(getUserInfoWatcher)
  ]);
}

export default rootSaga;
