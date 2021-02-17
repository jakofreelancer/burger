import React from "react";
import css from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = () => (<div>
    <ul className={css.Menu}>
        <MenuItem exact link="/">ЗАХИАЛАХ</MenuItem>
        <MenuItem link="/orders">ЗАХИАЛГАНУУД</MenuItem>
        <MenuItem link="/login">НЭВТРЭХ</MenuItem>
        <MenuItem link="/signup">БҮРТГҮҮЛЭХ</MenuItem>
    </ul>
</div>);

export default Menu;