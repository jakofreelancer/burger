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
                const expiresIn = result.data.expiresIn;
                const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
                const refreshToken = result.data.refreshToken;

                localStorage.setItem("token", token);
                localStorage.setItem("userId", userId);
                localStorage.setItem("expireDate", expireDate);
                localStorage.setItem("refreshToken", refreshToken);

                dispatch(loginUserSuccess(token, userId));
                console.log("expire1");
                console.log(expiresIn);
                dispatch(autoLogoutAfterMilSeconds(expiresIn * 1000));
                console.log("expire2");
                console.log(expiresIn * 1000);
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
    localStorage.removeItem("expireDate");
    localStorage.removeItem("refreshToken");
    
    return {
        type: "LOGOUT"
    };
};

export const autoLogoutAfterMilSeconds = (ms) => {
    return function(dispatch){
        //alert(Math.floor((ms/1000/60)) + " минут " + Math.floor(((ms/1000)%60)) + " секунд үлдлээ");
        // token шинэчлэх код
        // axios
        //     .post(
        //         "https://securetoken.googleapis.com/v1/token?key=AIzaSyCyKm75F2aeHpju74K8TxRuVbSQa5CSsb4", 
        //         {
        //             grant_type: "refresh_token",
        //             refresh_token: localStorage.get("refresh_token")
        //         }
        //     )
        //     .then(result => { 
        //         const token = result.data.id_token;
        //         const userId = result.data.user_id;

        //         const token = result.data.idToken;
        //         const userId = result.data.localId;
        //         const expiresIn = result.data.expiresIn;
        //         const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
        //         const refreshToken = result.data.refreshToken;

        //         localStorage.setItem("token", token);
        //         localStorage.setItem("userId", userId);
        //         localStorage.setItem("expireDate", expireDate);
        //         localStorage.setItem("refreshToken", refreshToken);

        //         dispatch(loginUserSuccess(token, userId));
        //     })
        //     .catch(err => {
        //         dispatch(loginUserError(err));
        //     });
        
        
        // автомат logout
        setTimeout(()=>{
            dispatch(logout());
        }, ms);
    };
};