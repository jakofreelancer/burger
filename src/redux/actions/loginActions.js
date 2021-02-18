import axios from "axios";

export const loginUser = (email, password) => {
    return function(dispatch) {
        dispatch(loginUserStart());

        const data = {
            email,
            password,
            returnSecureToken: true
        };

        axios
            .post(
                "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCyKm75F2aeHpju74K8TxRuVbSQa5CSsb4", 
                data
            )
            .then(result => { 
                // LocalStorage ruu hadgalna
                const token = result.data.idToken;
                const userId = result.data.localId;
                
                localStorage.setItem("token", token);
                localStorage.setItem("userId", userId);

                dispatch(loginUserSuccess(token, userId));
            })
            .catch(err => {
                dispatch(loginUserError(err));
            });

    };
};

export const loginUserStart = () => {
    return {
        type: "LOGIN_USER_START"
    };
};

export const loginUserSuccess = (token, userId) => {
    return {
        type: "LOGIN_USER_SUCCESS",
        token,
        userId
    };
};

export const loginUserError = (error) => {
    return {
        type: "LOGIN_USER_ERROR",
        error
    };
}; 

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    
    return {
        type: "LOGOUT"
    };
};