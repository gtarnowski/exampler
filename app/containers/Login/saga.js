import { call, takeLatest, put } from "redux-saga/effects";
import { submitLogin, saveUser } from "./actions";
import { API_URL } from "../../utils/constants";
import { NavigationActions } from "react-navigation";

export function* loginSaga({
  payload: { username, password, passwordRepeat }
}) {
  const fetchUrl = `${API_URL}/${passwordRepeat ? "register" : "login"}`;
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      username,
      password
    })
  };

  try {
    const response = yield call(fetch, fetchUrl, options);
    if (!response.ok) {
      console.log("error", response);
    }
    const data = yield response.json();
    if (data.token) {
      yield put(saveUser({ username }));
      yield put(NavigationActions.navigate("HomeScreen"));
    }
  } catch (e) {
    console.log(e);
  }
}

export default function* defaultSaga() {
  yield takeLatest(submitLogin, loginSaga);
}
