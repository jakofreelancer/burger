const initialState = {
    saving: false,
    logginIn: false,
    authServerError: null,
    authServerErrorCode: null,
    token: null,
    userId: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "SIGNUP_USER_START" : return {
            ...state,
            saving: true
        };

        case "SIGNUP_USER_SUCCESS" : return {
            ...state,
            saving: false,
            token: action.token,
            userId: action.userId
        };


        case "SIGNUP_USER_ERROR" : return {
            ...state,
            saving: false,
            authServerError: action.error.response.data.error.message
        };

        case "LOGIN_USER_START" : return {
            ...state,
            logginIn: true
        };

        case "LOGIN_USER_SUCCESS" : return {
            ...state,
            logginIn: false,
            token: action.token,
            userId: action.userId
        };


        case "LOGIN_USER_ERROR" : return {
            ...state,
            logginIn: false,
            // authServerError: action.error,
            // authServerErrorCode: action.error
            //authServerError: action.error.response.data.error.message,
            //authServerErrorCode: action.error.response.data.error.code
            authServerError: "error",
            authServerErrorCode: "errorCode"
        };

        case "LOGOUT" : return {
            ...state,
            token: null,
            userId: null,
            authServerError: null,
            authServerErrorCode: null
        };

        default: 
            return state;
    }
};

export default reducer;