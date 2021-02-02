import React from "react";
import style from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import BurgerBuilder from "../BurgerBuilder";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <main className={style.Content}>
        <BurgerBuilder />
      </main>
    </div>
  );
}

export default App;
