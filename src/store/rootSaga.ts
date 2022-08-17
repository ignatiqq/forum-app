import { all, spawn } from "redux-saga/effects";

import { changeAppThemeWatcher } from "./theme/sagas";

function* rootSaga() {
    yield all([
        spawn(changeAppThemeWatcher)
    ])
}  

export default rootSaga;