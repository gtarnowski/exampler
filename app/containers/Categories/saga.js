import { call, takeLatest, put, select } from "redux-saga/effects";
import {
  searchCategoryItems,
  savePlanets,
  saveVehicles,
  saveSpecies,
  saveStarships,
  setError,
  setLoading
} from "./actions";

import { SWAPI_URL } from "../../utils/constants";
import { makeSelectCategory } from "./selectors";

export function* searchCategoryItemsSaga() {
  yield put(setLoading(true));
  yield put(setError(null));

  const selectCategoryName = yield call(makeSelectCategory);
  const categoryName = yield select(selectCategoryName);

  try {
    const response = yield call(fetch, `${SWAPI_URL}/${categoryName}/`);
    if (!response.ok) {
      console.log("error", response);
    }
    const data = yield response.json();
    switch (categoryName) {
      case "planets":
        yield put(savePlanets(data.results));
        break;
      case "starships":
        yield put(saveStarships(data.results));
        break;
      case "vehicles":
        yield put(saveVehicles(data.results));
        break;
      case "species":
        yield put(saveSpecies(data.results));
        break;
    }

    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
    yield put(setLoading(false));
    yield put(setError(error));
  }
}

export default function* defaultSaga() {
  yield takeLatest(searchCategoryItems, searchCategoryItemsSaga);
}
