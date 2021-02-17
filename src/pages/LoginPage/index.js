import React, { Component } from "react";
import css from "./style.module.css";
import Button from "../../components/General/Button";

class Login extends Component {
    state = {
        email: "",
        password: ""
    };

    login = () => {
        alert("login..." + this.state.email);
    };

    changeEmail = (el) => {
        this.setState({email: el.target.value})
    }

    changePassword = (el) => {
        this.setState({password: el.target.value})
    }

    render() {
        return ( 
            <div className={css.Login}>
                <input onChange={this.changeEmail} type="text" placeholder="Имэйл хаяг" />
                <input onChange={this.changePassword} type="password" placeholder="Нууц үг" />
                <Button text="Нэвтрэх" btnType="Success" clicked={this.login} />
            </div>
        );
    }
}

export default Login;