import { call, takeLatest, put, select } from 'redux-saga/effects';
import { submitLogin } from './actions'

export function* loginSaga(payload) {
    console.log(payload)
}

export default function* defaultSaga() {
    yield takeLatest(submitLogin, loginSaga);
}
