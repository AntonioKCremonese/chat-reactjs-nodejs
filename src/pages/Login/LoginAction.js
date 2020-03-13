const INITIAL_STATE = {
    auth:false
};

function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'AUTHENTICATED':
            return { ...state, auth: action.auth };
        default:
            return state;
    }
}

export default auth;