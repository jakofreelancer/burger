import React from "react";
import css from "./style.module.css";

const modal = (props) => (
    <div className={css.Modal}>
        {props.children}
    </div>
);

export default modal;