import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { ILoginViaGithubResponse } from '@api/endpoints/github/login/types';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN } from '@constants/storageKeys/storageKeys';

export interface IUserStateAuth {
  data: ILoginViaGithubResponse | null;
  isLoading: boolean;
  error: string | null;
}

export interface IUserStateInfoData {
  id: number;
  login: string;
}

export interface IUserStateInfo {
  data: IUserStateInfoData | null;
  isLoading: boolean;
  error: string | null;
}

const initialAuthData = Cookies.get(ACCESS_TOKEN)
  ? {
      access_token: `${Cookies.get(ACCESS_TOKEN)}`,
      scope: '',
      token_type: 'bearer'
    }
  : null;

interface IUserState {
  auth: IUserStateAuth;
  info: IUserStateInfo;
}

const initialState: IUserState = {
  auth: {
    data: initialAuthData,
    isLoading: false,
    error: null
  },
  info: {
    data: null,
    isLoading: false,
    error: null
  }
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserAuthData(state, action: PayloadAction<ILoginViaGithubResponse>) {
      state.auth.data = action.payload;
    },
    setUserAuthLoading(state, action: PayloadAction<boolean>) {
      state.auth.isLoading = action.payload;
    },
    setUserAuthError(state, action: PayloadAction<string | null>) {
      state.auth.error = action.payload;
    },
    setUserInfoData(state, action: PayloadAction<IUserStateInfoData>) {
      state.info.data = action.payload;
    },
    setUserInfoLoading(state, action: PayloadAction<boolean>) {
      state.info.isLoading = action.payload;
    },
    setUserInfoRequestError(state, action: PayloadAction<string | null>) {
      state.info.error = action.payload;
    }
  }
});

export const {
  setUserAuthData,
  setUserAuthLoading,
  setUserAuthError,
  setUserInfoData,
  setUserInfoLoading,
  setUserInfoRequestError
} = userSlice.actions;
export default userSlice.reducer;
