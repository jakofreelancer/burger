import React, { Component} from "react";
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

  render () {
    return (
      <div className="App">
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <SideBar showSidebar={this.state.showSidebar} toggleSideBar={this.toggleSideBar} />

        <main className={style.Content}>
          USERID: {this.props.userId}
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/logout" component={Logout} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/orders" component={OrderPage} />
            <Route path="/shipping" component={ShippingPage} />
            <Route path="/" component={BurgerPage} />
          </Switch>
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

export default connect(mapStateToProps)(App);
