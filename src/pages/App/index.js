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
    showSidebar: false,
    favorite: "N/A"
  };

  toggleSideBar = () => {
    this.setState(prevState => {
      return {showSidebar: !prevState.showSidebar};
    });
  };

  chooseFavorite = (ingredient) => {
    this.setState({ favorite: ingredient});
  };

  render () {
    return (
      <div className="App">
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <SideBar showSidebar={this.state.showSidebar} toggleSideBar={this.toggleSideBar} />

        <main className={style.Content}>
          <p>Сонгосон орц : {this.state.favorite}</p>
          <Switch>
            <Route path="/orders" component={OrderPage} />
            <Route path="/shipping" component={ShippingPage} />
            <Route path="/" render={()=> (<BurgerPage chooseFavorite={this.chooseFavorite} />) } />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
