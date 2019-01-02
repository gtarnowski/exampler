import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import { all, fork } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";

// Reducers
import login from "../containers/Login/reducers";
import categories from "../containers/Categories/reducers";

// Sagas
import loginSagas from "../containers/Login/saga";
import categoriesSagas from "../containers/Categories/saga";

const combinedReducers = combineReducers({
  login,
  categories
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combinedReducers,
  compose(applyMiddleware(sagaMiddleware))
);

function* rootSaga() {
  yield all([loginSagas(), categoriesSagas()]);
}

sagaMiddleware.run(rootSaga);
