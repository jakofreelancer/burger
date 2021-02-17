const initialState = {
    saving: false,
    signupServerError: null,
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
            token: action.firebaseResultData.idToken,
            userId: action.firebaseResultData.localId
        };


        case "SIGNUP_USER_ERROR" : return {
            ...state,
            saving: false,
            signupServerError: action.error.response.data.error.message
        };

        default: 
            return state;
    }
};

export default reducer;