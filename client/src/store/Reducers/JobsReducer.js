
export function JobsReducer(state = {}, action) {
    switch (action.type) {
        case 'LOAD_JOBS':
            return { ...state, loading: true };
        case 'ERR_JOBS':
            return { ...state, loading: false, error: action.error };
        case 'JOBS_RECEIVED':
            return { ...state, offers: action.json, loading: false }
        default:
            return state;
    }
};
