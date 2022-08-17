import { combineReducers } from "@reduxjs/toolkit";

import themeSlice from "./theme/slice"; 

const rootReducer = combineReducers({
    themeSlice
});

export default rootReducer;