import { combineReducers } from '@reduxjs/toolkit';

import themeSlice from './theme/slice';
import userSlice from './user/slice';

const rootReducer = combineReducers({
  themeSlice,
  userSlice
});

export default rootReducer;
