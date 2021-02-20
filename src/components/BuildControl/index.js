import React from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import * as actions from "../../redux/actions/burgerActions";

const BuildControl = props => (
    <div className={css.BuildControl}>
        <div className={css.Label}>{props.ingredient}</div>
        <button disabled={props.disabled[props.type]} onClick={() => props.removeIngredient(props.type)} className={css.Less}>Хасах</button>
        <button onClick={() => props.addIngredient(props.type)} className={css.More}>Нэмэх</button>
    </div>
);

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: ingredientName => dispatch(actions.addIngredient(ingredientName)),
        removeIngredient: ingredientName => dispatch(actions.removeIngredient(ingredientName))
    };
};

export default connect(null, mapDispatchToProps)(BuildControl);