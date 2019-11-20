
export function AuthReducer(state = {}, action) {
    switch (action.type) {
        case 'LOAD_AUTH':
            return { loading: true };
        case 'ERR_AUTH':
            return { error: action.error, is_authentified: false };
        case 'AUTH_RECEIVED':
            return { user: action.json, is_authentified: action.auth }
        default:
            return state;
    }
};
