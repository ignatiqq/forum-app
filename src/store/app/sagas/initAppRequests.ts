import { call, spawn, all } from "redux-saga/effects";
import Cookies from "js-cookie";
import { REFRESH_TOKEN } from "@constants/storageKeys/storageKeys";

export function* refreshTokenHandler() {
  try {
    const refreshToken: string | undefined = yield call(Cookies.get as any, REFRESH_TOKEN);

    if(refreshToken) {
      
    } else {

    }

  } catch (e) {

  }
}
export function* initAppRequestsWatcher() {
  yield all([
    spawn(refreshTokenHandler)
  ])
}