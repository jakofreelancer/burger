import React from "react";
import BurgerIngredient from "../BurgerIngredient";
import css from "./style.module.css";

const Burger = () => (
    <div className={css.Burger}>
        <BurgerIngredient type="bread-top"/>
        <BurgerIngredient type="salad"/>
        <BurgerIngredient type="bacon"/>
        <BurgerIngredient type="meat"/>
        <BurgerIngredient type="cheese"/>
        <BurgerIngredient type="bread-bottom"/>
    </div>
);

export default Burger;