import { all, fork } from "redux-saga/effects";
import loginSaga from "./loginSaga";

function* rootSaga() {
  yield all([fork(loginSaga)]);
}

export default rootSaga;
