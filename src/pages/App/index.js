import React from "react";
import style from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <main className={style.Content}>
        <BurgerPage />
      </main>
    </div>
  );
}

export default App;
