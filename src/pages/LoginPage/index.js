import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/loginActions";

import css from "./style.module.css";
import Button from "../../components/General/Button";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";

class Login extends Component {
    state = {
        email: "",
        password: ""
    };

    login = () => {
        this.props.login(this.state.email, this.state.password);
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
                {this.props.userId && <Redirect to="/orders" />}

                <input onChange={this.changeEmail} type="text" placeholder="Имэйл хаяг" />
                <input onChange={this.changePassword} type="password" placeholder="Нууц үг" />
                
                {this.props.logginIn && <Spinner />}

                {this.props.authServerError && (<div style={{color:"red"}}>
                    Алдааны код: {this.props.authServerErrorCode} <br/>
                    Алдааны мессеж: {this.props.authServerError}</div>)}
                
                <Button text="Нэвтрэх" btnType="Success" clicked={this.login} />
            </div>
        );
    }
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