import { put, takeLatest } from 'redux-saga/effects';
import { ApiService } from 'utils/apiService'
import { portal_api } from 'api/'
import { history } from 'store'

var request = new ApiService()
request.baseUrl = portal_api.base_url


function* getUser(action) {
    yield put({ type: "LOAD_AUTH" });

    const { email, password } = action
    const json = yield request._POST('/users/login', { email, password }).then(response => response);

    if (json.ok) {
        if (json.data.length === 0) {
            yield put({ type: "ERR_AUTH", error: "invalid email/password !"});
        } else {
            yield put({ type: "AUTH_RECEIVED", json: json.data, auth: true });
            history.push('/user')
        }
    } else {
        yield put({ type: "ERR_AUTH", error: json.data.error });
    }
}

function* checkSession(action) {
    yield put({ type: "LOAD_AUTH" });
}


export function* AuthSaga() {
    yield takeLatest('LOGIN', getUser)
    yield takeLatest('GET_SESSION', checkSession)
}


