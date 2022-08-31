import { ILoginViaGithubParams } from '@/api/endpoints/github/login/types';
import { createAction } from '@reduxjs/toolkit';

import { FETCH_USER_LOGIN } from './constants';

export const fetchUserLogin = createAction<ILoginViaGithubParams>(FETCH_USER_LOGIN);
