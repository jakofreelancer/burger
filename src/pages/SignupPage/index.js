import React, { useEffect, useState } from "react";
import css from "./style.module.css";
import Button from "../../components/General/Button";
import * as actions from "../../redux/actions/signupActions";
import { connect } from "react-redux";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";

const Signup = (props) => {
    // Зэрэг байнга өөрчлөгддөг өгөгдлүүдийг ингэж объект болгох нь дээр байдаг
    //const [user, setUser] = useState({name: "", pass: ""});
    // console.log(user.name);
    // setUser({name: "naraa", pass: "123"});

    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {

    }, [email, password1, password2]);

    const signup = () => {
        if(password1 === password2) {
            props.signupUser(email, password1);
        } else {
            setError("Нууц үгнүүд хоорондоо таарахгүй байна");
        }
    };

    return ( 
        <div className={css.Signup}>
            {props.userId && <Redirect to="/" />}
            <h1>Бүртгэлийн форм </h1>
            <div>Өөрийн мэдээллээ оруулна уу!</div>
            <input onChange={el => setEmail(el.target.value)} type="text" name="email" placeholder="Имэйл хаяг" />
            <input onChange={el => setPassword1(el.target.value)} type="password" name="password1" placeholder="Нууц үгээ оруулна уу" />
            <input onChange={el => setPassword2(el.target.value)} type="password" name="password2" placeholder="Нууц үгээ давтан оруулна уу" />
            {error && (<div style={{color:"red"}}>{error}</div>)}

            {
                props.authServerError && (<div style={{color:"red"}}>{props.authServerError}</div>)
            }

            {props.saving && <Spinner />}

            <Button text="БҮРТГҮҮЛЭХ" btnType="Success" clicked={signup} />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        saving: state.signupLoginReducer.saving,
        authServerError: state.signupLoginReducer.authServerError,
        userId: state.signupLoginReducer.userId
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signupUser: (email, password) => dispatch(actions.signupUser(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);