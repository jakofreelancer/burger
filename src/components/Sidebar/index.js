import React from "react";
import css from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
import MenuItem from "../MenuItem";
import Shadow from "../General/Shadow";

const SideBar = () => {
    return (
        <div>
            <Shadow show />
            <div className={css.SideBar}>
                <div className={css.Logo}>
                    <Logo />
                    <Menu />
                </div>
            </div>
        </div>
    );
};

export default SideBar;