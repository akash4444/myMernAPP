import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./redux/mainReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = getDefaultMiddleware();
middleware.push(sagaMiddleware);

const store = configureStore({ reducer, middleware });
sagaMiddleware.run(rootSaga);

export default store;
