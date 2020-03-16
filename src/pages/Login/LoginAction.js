const INITIAL_STATE = {
    data:{auth:false}
};

function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'AUTHENTICATED':
            return { ...state, data: action.data };
        default:
            return state;
    }
}

export default auth;