import { combineReducers } from "redux";
import { AuthReducer } from './AuthReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    auth: AuthReducer
});

export default rootReducer;