import React, { Component } from "react";
import css from "./style.module.css";
import Button from "../../components/General/Button";

class Signup extends Component {
    state = {
        email: "",
        password1: "",
        password2: ""
    };

    changeEmail = (el) => {
        this.setState({email: el.target.value})
    }

    changePassword1 = (el) => {
        this.setState({password1: el.target.value})
    }

    changePassword2 = (el) => {
        this.setState({password2: el.target.value})
    }

    signup = () => {
        alert("signup..." + this.state.email);
    };

    render() {
        return ( 
            <div className={css.Signup}>
                <h1>Бүртгэлийн форм </h1>
                <div>Өөрийн мэдээллээ оруулна уу!</div>
                <input onChange={this.changeEmail} type="text" name="email" placeholder="Имэйл хаяг" />
                <input onChange={this.changePassword1} type="password" name="password1" placeholder="Нууц үгээ оруулна уу" />
                <input onChange={this.changePassword2} type="password" name="password2" placeholder="Нууц үгээ давтан оруулна уу" />
                <Button text="Нэгдэх" btnType="Success" clicked={this.signup} />
            </div>
        );
    }
}

export default Signup;