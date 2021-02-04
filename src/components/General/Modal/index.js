import React from "react";
import css from "./style.module.css";

const modal = (props) => (
    <div 
        onClick={props.closeOrderConfirmModal}
        style={{
            transform: props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: props.show ? "1" : "0" 
        }} 
        className={css.Modal}>
        {props.children}
    </div>
);

export default modal;