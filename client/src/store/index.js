import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from 'redux-logger';
import rootReducer from "./Reducers";
import rootSaga from "./Sagas";

import {createBrowserHistory} from 'history'
import { routerMiddleware } from 'connected-react-router'

import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: [
    ],
    blacklist: [
        'auth',
    ],
};


const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);

const persistedReducer = persistReducer(persistConfig, rootReducer(history))

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();
const middleware = [sagaMiddleware, loggerMiddleware, routeMiddleware];

const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor, history};