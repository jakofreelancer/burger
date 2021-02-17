import axios from "axios";

export const signupUser = (email, password) => {
    return function(dispatch) {
        dispatch(signupUserStart());

        const data = {
            email,
            password,
            returnSecureToken: true
        };

        axios
            .post(
                "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCyKm75F2aeHpju74K8TxRuVbSQa5CSsb4", 
                data
            )
            .then(result => {
                dispatch(signupUserSuccess(result.data));
            })
            .catch(err => {
                dispatch(signupUserError(err));
            });

    };
};

export const signupUserStart = () => {
    return {
        type: "SIGNUP_USER_START"
    };
};

export const signupUserSuccess = (firebaseResultData) => {
    return {
        type: "SIGNUP_USER_SUCCESS",
        firebaseResultData
    };
};

export const signupUserError = (error) => {
    return {
        type: "SIGNUP_USER_ERROR",
        error
    };
};