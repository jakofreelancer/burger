import React from "react";
import css from "./style.module.css";
import BuildControl from "../BuildControl";

const BuildControls = props => (
    <div className={css.BuildControls}>
        <BuildControl addIngredient={props.addIngredient} type="salad" ingredient="Салад" />
        <BuildControl addIngredient={props.addIngredient} type="bacon" ingredient="Гахайн мах" />
        <BuildControl addIngredient={props.addIngredient} type="cheese" ingredient="Бяслаг" />
        <BuildControl addIngredient={props.addIngredient} type="meat" ingredient="Үхрийн мах" />
    </div>
);

export default BuildControls;