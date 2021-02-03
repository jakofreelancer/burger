import React, { Component } from "react";
import "./style.css";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        }
    }

    addIngredient = (type) => {
        console.log('===>' + type);

        const newIngredients = { ...this.state.ingredients };
        newIngredients[type]++;
        this.setState({ ingredients: newIngredients });
    };

    render () {
        return (
            <div>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls addIngredient={this.addIngredient} />
            </div>
        );
    }
}

export default BurgerBuilder