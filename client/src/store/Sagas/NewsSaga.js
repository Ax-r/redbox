import { put, takeLatest } from 'redux-saga/effects';
import { ApiService } from 'utils/apiService'

var request = new ApiService()
request.baseUrl = 'https://newsapi.org/v2'

function* fetchNews(action) {
    yield put({ type: "LOAD_NEWS" });

    const source = action.source
    const json = yield request._GET('/everything?sources='+source+'&apiKey=e75b3b166d3a4016959d2aa98179cbed').then(response => response);

    if (json.ok) {
        yield put({ type: "NEWS_RECEIVED", json: json.data.articles, });
    } else {
        yield put({ type: "ERR_NEWS", error: json.data.message });
    }
}

function* fetchSources() {
    yield put({ type: "LOAD_NEWS" });

    const json = yield request._GET('/sources?apiKey=e75b3b166d3a4016959d2aa98179cbed').then(response => response);
    if (json.ok) {
        yield put({ type: "NEWS_SRC", json: json.data.sources, });
    } else {
        yield put({ type: "ERR_NEWS", error: json.data.message });
    }
}

export function* NewsSaga() {
    yield takeLatest('GET_NEWS', fetchNews)
}

export function* SrcSaga() {
    yield takeLatest('GET_SRC', fetchSources)
}