import React from "react";
import css from "./style.module.css";

const Shadow = (props) => {
    return props.show ? <div onClick={props.closeOrderConfirmModal} className={css.Shadow}></div> : null;
};

export default Shadow;