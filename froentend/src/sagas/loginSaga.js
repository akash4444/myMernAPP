import { call, put, takeLeading } from "redux-saga/effects";
import axios from "axios";
import { loginActions } from "../redux/index";

const loginAPi = async ({ payload }) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return res.data;
};

function* loginApiCall(action) {
  try {
    yield put(loginActions.loadingLoginData());
    const data = yield call(loginAPi, action);
    yield put(loginActions.updateLoginData({ isLoggedIn: true, data }));
  } catch (e) {
    yield put(loginActions.errorLoginData(e));
  }
}

function* logoutApiCall() {
  yield put(loginActions.logoutData());
}

export default function* wathers() {
  yield takeLeading("LOGIN_USER", loginApiCall);
  yield takeLeading("LOGOUT_USER", logoutApiCall);
}
