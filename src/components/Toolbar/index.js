import React from "react";
import styles from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";

const Toolbar = () => (
    <header className={styles.Toolbar}>
        <div>...</div>
        <Logo />
        <nav>
            <Menu />    
        </nav>
    </header>
);

export default Toolbar;