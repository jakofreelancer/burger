import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/loginActions";

import css from "./style.module.css";
import Button from "../../components/General/Button";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";

const Login = (props) => {
    // Зэрэг байнга өөрчлөгддөг өгөгдлүүдийг ингэж объект болгох нь дээр байдаг
    //const [user, setUser] = useState({name: "", pass: ""});
    // console.log(user.name);
    // setUser({name: "naraa", pass: "123"});
    
    const [form, setForm] = useState({email: "", password: ""});

    const login = () => {
        props.login(form.email, form.password);
    };

    const changeEmail = (el) => {
        const newEmail = el.target.value;
        setForm(formBefore => ({ 
            email: newEmail, 
            password: formBefore.password 
        }));
    }

    const changePassword = (el) => {
        const newPassword = el.target.value;
        setForm(formBefore => ({ 
            email: formBefore.email, 
            password: newPassword 
        }));
    }

    //console.log(props);
    //console.log(props.userId);
    return (
        <div className={css.Login}>
            {props.userId && <Redirect to="/orders" />}

            <input onChange={changeEmail} type="text" placeholder="Имэйл хаяг" />
            <input onChange={changePassword} type="password" placeholder="Нууц үг" />
            
            {props.logginIn && <Spinner />}

            {
                props.authServerError && 
                (
                    <div style={ {color:"red"} }>
                        Алдааны код: {props.authServerErrorCode} <br/>
                        Алдааны мессеж: {props.authServerError}
                    </div>
                )
            }
            
            <Button text="Нэвтрэх" btnType="Success" clicked={login} />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        logginIn: state.signupLoginReducer.logginIn,
        authServerError: state.signupLoginReducer.authServerError,
        authServerErrorCode: state.signupLoginReducer.authServerErrorCode,
        userId: state.signupLoginReducer.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(actions.loginUser(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);