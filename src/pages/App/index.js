import React, { Component} from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import style from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/Sidebar";
import OrderPage from "../OrderPage";
import LoginPage from "../LoginPage";
import SignupPage from "../SignupPage";
import ShippingPage from "../ShippingPage";
import { Route, Switch } from "react-router-dom";
import Logout from "../../components/Logout";
import * as actions from "../../redux/actions/loginActions";

class App extends Component {
  state = {
    showSidebar: false//,
    //favorite: "N/A" prop drilling.d haruulahiin tuld hiisen
  };

  toggleSideBar = () => {
    this.setState(prevState => {
      return {showSidebar: !prevState.showSidebar};
    });
  };

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    
    if (token) {
      this.props.autoLogin(token, userId);
    }
  };

  render () {
    return (
      <div className="App">
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <SideBar showSidebar={this.state.showSidebar} toggleSideBar={this.toggleSideBar} />

        <main className={style.Content}>
          {this.props.userId ? 
            (
              <Switch>
                <Route path="/logout" component={Logout} />
                <Route path="/orders" component={OrderPage} />
                <Route path="/shipping" component={ShippingPage} />
                <Route path="/" component={BurgerPage} />
              </Switch>
            ) : 
            (
              <Switch>
                  <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/signup" component={SignupPage} />
                    <Redirect to="/login" />
                  </Switch>
              </Switch>
          )}
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.signupLoginReducer.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    autoLogin: (token, userId) => 
      dispatch(actions.loginUserSuccess(token, userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
