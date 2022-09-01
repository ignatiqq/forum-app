import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { ILoginViaGithubResponse } from '@api/endpoints/github/login/types';

export interface IUserStateAuth {
  data: ILoginViaGithubResponse | null;
  isLoading: boolean;
  error: string | null;
}

interface IUserState {
  auth: IUserStateAuth;
}

const initialState: IUserState = {
  auth: {
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
    }
  }
});

export const { setUserAuthData, setUserAuthLoading, setUserAuthError } = userSlice.actions;
export default userSlice.reducer;
