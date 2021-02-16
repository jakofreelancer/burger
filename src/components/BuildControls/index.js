import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/burgerActions";
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
                    removeIngredient={props.removeIngredient}
                    addIngredient={props.addIngredient}
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
        burgerIngredient: state.ingredients,
        price: state.totalPrice,
        purchasing: state.purchasing,
        ingredientNames: state.ingredientNames
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: ingredientName => dispatch(actions.addIngredient(ingredientName)),
        removeIngredient: ingredientName => dispatch(actions.removeIngredient(ingredientName))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildControls);