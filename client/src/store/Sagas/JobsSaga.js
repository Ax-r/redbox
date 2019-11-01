import { put, takeLatest } from 'redux-saga/effects';
import { ApiService } from 'utils/apiService'

var request = new ApiService()
request.baseUrl = 'https://www.themuse.com/api'

function* fetchJobs() {
    yield put({ type: "LOAD_JOBS" });

    const json = yield request._GET('/public/jobs?page=2&descending=true').then(response => response);

    console.log(json)

    if (json.ok) {
        yield put({ type: "JOBS_RECEIVED", json: json.data.results, });
    } else {
        yield put({ type: "ERR_JOBS", error: json.data.error });
    }
}

export function* JobsSaga() {
    yield takeLatest('GET_JOBS', fetchJobs)
}
