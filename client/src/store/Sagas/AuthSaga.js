import { put, takeLatest } from 'redux-saga/effects';
import { ApiService } from 'utils/apiService'
import { portal_api } from 'api/'

var request = new ApiService()
request.baseUrl = portal_api.base_url


function* getUser(action) {
    yield put({ type: "LOAD_AUTH" });

    const { email, password } = action
    const json = yield request._POST('/users/login', { email, password }).then(response => response);

    if (json.ok) {
        yield put({ type: "AUTH_RECEIVED", json: json.data, });
    } else {
        yield put({ type: "ERR_AUTH", error: json.data.error });
    }
}


export function* AuthSaga() {
    yield takeLatest('LOGIN', getUser)
}

