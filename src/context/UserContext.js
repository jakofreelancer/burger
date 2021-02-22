import React, { useState } from "react";
import axios from "../axios-orders";

const UserContext = React.createContext();

const initialState = {
    saving: false,
    logginIn: false,
    error: null,
    errorCode: null,
    token: null,
    userId: null
};

export const UserStore = props => {
    const [state, setState] = useState(initialState);

    const signupUser = (email, password) => {
        setState({ ...state, saving: true });

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
                const token = result.data.idToken;
                const userId = result.data.localId;

                localStorage.setItem("token", token);
                localStorage.setItem("userId", userId);

                setState({ 
                    ...state, 
                    saving: false, 
                    token, 
                    userId, 
                    error: null, 
                    errorCode: null 
                });

            })
            .catch(err => {
                setState({ 
                    ...state, 
                    saving: false,
                    token: null,
                    userId: null,
                    error: err.message, 
                    errorCode: err.code  
                });
            });
    };

    return (
        <UserContext.Provider value={{ state, signupUser }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContext;