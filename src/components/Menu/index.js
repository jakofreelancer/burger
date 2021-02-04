import React from "react";
import css from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = () => (<div>
    <ul className={css.Menu}>
        <MenuItem active link="/">ЗАХИАЛАХ</MenuItem>
        <MenuItem link="/login">НЭВТРЭХ</MenuItem>
    </ul>
</div>);

export default Menu;