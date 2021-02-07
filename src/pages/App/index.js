import React, { Component} from "react";
import style from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/Sidebar";
import OrderPage from "../OrderPage";
import { ShippingPage } from "../ShippingPage";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    showSidebar: false
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
          <Switch>
            <Route path="/orders" component={OrderPage} />
            <Route path="/shipping" component={ShippingPage} />
            <Route path="/" component={BurgerPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
