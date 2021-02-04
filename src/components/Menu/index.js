import React from "react";
import css from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = () => (<div>
    <ul className={css.Menu}>
        <MenuItem active link="/">Бургер захиалах</MenuItem>
        <MenuItem link="/checkout">Төлбөр төлөх</MenuItem>
    </ul>
</div>);

export default Menu;