import React, { useContext } from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import * as actions from "../../redux/actions/burgerActions";
import BurgerContext from "../../context/BurgerContext";

const BuildControl = props => {
    const appData = useContext(BurgerContext);
    console.log("contexxxxxxxxxxxxxxxxxxt", BurgerContext);
    return (
        <div className={css.BuildControl}>
            <div className={css.Label}>{props.ingredient}</div>
            <button disabled={props.disabled[props.type]} onClick={() => props.removeIngredient(props.type)} className={css.Less}>Хасах</button>
            <button onClick={() => props.addIngredient(props.type)} className={css.More}>Нэмэх {appData} </button>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: ingredientName => dispatch(actions.addIngredient(ingredientName)),
        removeIngredient: ingredientName => dispatch(actions.removeIngredient(ingredientName))
    };
};

export default connect(null, mapDispatchToProps)(BuildControl);