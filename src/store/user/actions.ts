import { ILoginViaGithubParams } from '@/api/endpoints/github/login/types';
import { createAction } from '@reduxjs/toolkit';

import { FETCH_USER_LOGIN, CANCEL_USER_LOGIN, GET_USER_INFO } from './constants';

export const fetchUserLogin = createAction<ILoginViaGithubParams>(FETCH_USER_LOGIN);
export const cancelUserLogin = createAction(CANCEL_USER_LOGIN);
export const getUserInfo = createAction(GET_USER_INFO);
