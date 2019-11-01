
export function AuthReducer(state = {}, action) {
    switch (action.type) {
        case 'LOAD_AUTH':
            return { ...state, loading: true };
        case 'ERR_AUTH':
            return { ...state, loading: false, error: action.error };
        case 'AUTH_RECEIVED':
            return { ...state, user: action.json, loading: false }
        default:
            return state;
    }
};
