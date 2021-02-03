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

    addIngredient = type => {
        const newIngredients = { ...this.state.ingredients };
        newIngredients[type]++;
        this.setState({ ingredients: newIngredients });
    };

    removeIngredient = type => {
        if(this.state.ingredients[type] > 0) {
            const newIngredients = { ...this.state.ingredients };
            newIngredients[type]--;
            this.setState({ ingredients: newIngredients });
        }
        
    };
    
    render () {
        const disabledIngredients = { ...this.state.ingredients };

        for(let key in disabledIngredients) {
            disabledIngredients[key] = disabledIngredients[key] <= 0;
        }

        return (
            <div>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls disabledIngredients={disabledIngredients} removeIngredient={this.removeIngredient} addIngredient={this.addIngredient} />
            </div>
        );
    }
}

export default BurgerBuilder