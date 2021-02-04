import React from "react";
import css from "./style.module.css";
import BuildControl from "../BuildControl";

const BuildControls = props => {

    return (
        <div className={css.BuildControls}>
            <p>Бургерийн үнэ: <strong>{props.price}</strong></p>
            {/* () => props.removeIngredient("salad") */}

            {Object.keys(props.ingredientNames).map( el => (
                <BuildControl 
                    key={el}
                    disabled={props.disabledIngredients} 
                    removeIngredient={props.removeIngredient} 
                    addIngredient={props.addIngredient}
                    type={el}
                    ingredient={props.ingredientNames[el]}
                />
            ))}
            
            <button 
                onClick={props.showOrderConfirmModal} 
                disabled={props.disabled} 
                className={css.OrderButton}>
                    ЗАХИАЛАХ
            </button>
        </div>
    );
};

export default BuildControls;