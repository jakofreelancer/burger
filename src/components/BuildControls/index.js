import React from "react";
import css from "./style.module.css";
import BuildControl from "../BuildControl";

const BuildControls = props => {
    const controls = {
        bacon: "Гахайн мах",
        cheese: "Бяслаг",
        meat: "Үхрийн мах",
        salad: "Салад"
    };

    return (
        <div className={css.BuildControls}>
            <p>Бургерийн үнэ: <strong>{props.price}</strong></p>
            {/* () => props.removeIngredient("salad") */}

            {Object.keys(controls).map( el => (
                <BuildControl 
                    key={el}
                    disabled={props.disabledIngredients} 
                    removeIngredient={props.removeIngredient} 
                    addIngredient={props.addIngredient}
                    type={el}
                    ingredient={controls[el]}
                />
            ))}
            
            <button disabled={props.disabled} className={css.OrderButton}>ЗАХИАЛАХ</button>
        </div>
    );
};

export default BuildControls;