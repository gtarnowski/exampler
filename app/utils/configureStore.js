import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";

// Reducers
import login from "../containers/Login/reducers";

// Sagas
import searchBarSagas from "../containers/Login/saga";

const combinedReducers = combineReducers({
  login
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combinedReducers,
  compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(searchBarSagas);
