import React from "react";
import style from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/Sidebar";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <SideBar />
      <main className={style.Content}>
        <BurgerPage />
      </main>
    </div>
  );
}

export default App;
