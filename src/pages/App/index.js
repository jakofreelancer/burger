import React, { useState, useEffect, Suspense } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import style from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import SideBar from "../../components/Sidebar";
import LoginPage from "../LoginPage";
import ShippingPage from "../ShippingPage";
import { Route, Switch } from "react-router-dom";
import Logout from "../../components/Logout";
import * as actions from "../../redux/actions/loginActions";
import { BurgerStore } from "../../context/BurgerContext";
import { OrderStore } from "../../context/OrdersContext";
import Burger from "../../components/Burger";

const BurgerPage = React.lazy(() => {
  return import("../BurgerPage");
});

const OrderPage = React.lazy(() => {
  return import("../OrderPage");
});

const SignupPage = React.lazy(() => {
  return import("../SignupPage");
});

const App = props => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSideBar = () => {
    setShowSidebar(prevState => !prevState);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = new Date(localStorage.getItem("expireDate"));
    const refreshToken = localStorage.getItem("refreshToken");
    
    if (token) {
      if(expireDate > new Date()) {
        // Хугацаа нь дуусаагүй токен, автомат логин хийнэ
        const leftSeconds = expireDate.getTime()-new Date().getTime();
        props.autoLogin(token, userId, leftSeconds);

        props.autoLogoutAfterMilSeconds(
          leftSeconds
        );
      } else {
        // Токен хугацаа дууссан байна logout
        props.logout();
      }
    }
  }, []);

  return (
    <div className="App">
      <Toolbar toggleSideBar={toggleSideBar} />
      <SideBar showSidebar={showSidebar} toggleSideBar={toggleSideBar} />

      <main className={style.Content}>
        <BurgerStore>
          <Suspense fallback={<div>Түр хүлээнэ үү...</div>}>
            {props.userId ? 
              (
                <Switch>
                  <Route path="/logout" component={Logout} />
                  <Route path="/orders">
                    <OrderStore>
                      <OrderPage />
                    </OrderStore>
                  </Route>
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
          </Suspense>
        </BurgerStore>
      </main>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userId: state.signupLoginReducer.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    autoLogin: (token, userId) => 
      dispatch(actions.loginUserSuccess(token, userId)),
      logout: () => dispatch(actions.logout),
      autoLogoutAfterMilSeconds: (leftSeconds) => dispatch(actions.autoLogoutAfterMilSeconds(leftSeconds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
