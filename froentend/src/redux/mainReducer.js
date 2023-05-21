import {
  combineReducers,
  configureStore,
  applyMiddleware,
} from "@reduxjs/toolkit";

import { loginReducer } from "./index";

const reducer = combineReducers({
  login: loginReducer,
});

export default reducer;
