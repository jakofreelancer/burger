import React, { useState, useEffect, useContext } from "react";

import css from "./style.module.css";
import Button from "../../components/General/Button";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";
import UserContext from "../../context/UserContext";

const Login = (props) => {
    const ctx = useContext(UserContext);
    // Зэрэг байнга өөрчлөгддөг өгөгдлүүдийг ингэж объект болгох нь дээр байдаг
    //const [user, setUser] = useState({name: "", pass: ""});
    // console.log(user.name);
    // setUser({name: "naraa", pass: "123"});
    
    const [form, setForm] = useState({email: "", password: ""});

    const login = () => {
        ctx.loginUser(form.email, form.password);
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
            {ctx.state.userId && <Redirect to="/orders" />}

            <input onChange={changeEmail} type="text" placeholder="Имэйл хаяг" />
            <input onChange={changePassword} type="password" placeholder="Нууц үг" />
            
            {ctx.state.logginIn && <Spinner />}

            {
                ctx.state.authServerError && 
                (
                    <div style={ {color:"red"} }>
                        Алдааны код: {ctx.state.authServerErrorCode} <br/>
                        Алдааны мессеж: {ctx.state.authServerError}
                    </div>
                )
            }
            
            <Button text="Нэвтрэх" btnType="Success" clicked={login} />
        </div>
    );
};

export default Login;