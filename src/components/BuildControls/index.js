import React from "react";
import css from "./style.module.css";
import BuildControl from "../BuildControl";

const BuildControls = props => (
    <div className={css.BuildControls}>
        {/* () => props.removeIngredient("salad") */}
        <BuildControl 
            disabled={props.disabledIngredients} 
            removeIngredient={props.removeIngredient} 
            addIngredient={props.addIngredient} 
            type="salad" 
            ingredient="Салад" 
        />
        <BuildControl 
            disabled={props.disabledIngredients} 
            removeIngredient={props.removeIngredient} 
            addIngredient={props.addIngredient} 
            type="bacon" 
            ingredient="Гахайн мах" 
        />
        <BuildControl 
            disabled={props.disabledIngredients} 
            removeIngredient={props.removeIngredient} 
            addIngredient={props.addIngredient} 
            type="cheese" 
            ingredient="Бяслаг" 
        />
        <BuildControl 
            disabled={props.disabledIngredients} 
            removeIngredient={props.removeIngredient} 
            addIngredient={props.addIngredient} 
            type="meat" 
            ingredient="Үхрийн мах" 
        />
    </div>
);

export default BuildControls;