import React from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import BuildControl from "../BuildControl";

const BuildControls = props => {
    const disabledIngredients = { ...props.burgerIngredient };

    for(let key in disabledIngredients) {
        disabledIngredients[key] = disabledIngredients[key] <= 0;
    }

    return (
        <div className={css.BuildControls}>
            <p>Бургерийн үнэ: <strong>{props.price}</strong></p>

            {Object.keys(props.ingredientNames).map( el => (
                <BuildControl 
                    key={el}
                    disabled={disabledIngredients}
                    type={el}
                    ingredient={props.ingredientNames[el]}
                />
            ))}
            
            <button 
                onClick={props.showOrderConfirmModal} 
                disabled={!props.purchasing} 
                className={css.OrderButton}>
                    ЗАХИАЛАХ
            </button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        burgerIngredient: state.burgerReducer.ingredients,
        price: state.burgerReducer.totalPrice,
        purchasing: state.burgerReducer.purchasing,
        ingredientNames: state.burgerReducer.ingredientNames
    };
};

export default connect(mapStateToProps)(BuildControls);