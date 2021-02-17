import React, { Component } from "react";
import css from "./style.module.css";
import Button from "../../components/General/Button";
import * as actions from "../../redux/actions/signupActions";
import { connect } from "react-redux";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";

class Signup extends Component {
    state = {
        email: "",
        password1: "",
        password2: "",
        error: ""
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
        if(this.state.password1 === this.state.password2) {
            this.props.signupUser(this.state.email, this.state.password1);
        } else {
            this.setState({error: "Нууц үгнүүд хоорондоо таарахгүй байна"});
        }
    };

    render() {
        return ( 
            <div className={css.Signup}>
                {this.props.userId && <Redirect to="/orders" />}
                <h1>Бүртгэлийн форм </h1>
                <div>Өөрийн мэдээллээ оруулна уу!</div>
                <input onChange={this.changeEmail} type="text" name="email" placeholder="Имэйл хаяг" />
                <input onChange={this.changePassword1} type="password" name="password1" placeholder="Нууц үгээ оруулна уу" />
                <input onChange={this.changePassword2} type="password" name="password2" placeholder="Нууц үгээ давтан оруулна уу" />
                {this.state.error && (<div style={{color:"red"}}>{this.state.error}</div>)}

                {
                    this.props.signupServerError && (<div style={{color:"red"}}>{this.props.signupServerError}</div>)
                }

                {this.props.saving && <Spinner />}

                <Button text="БҮРТГҮҮЛЭХ" btnType="Success" clicked={this.signup} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        saving: state.signupReducer.saving,
        signupServerError: state.signupReducer.signupServerError,
        userId: state.signupReducer.userId
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signupUser: (email, password) => dispatch(actions.signupUser(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);