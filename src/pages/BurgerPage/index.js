import React, { Component } from "react";
import "./style.css";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";

//unenuud uurchlugduh shaardlaga app.d bhgui uchraas dotood state.d bish classiin gadna zarlay
const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },

        totalPrice: 1000,
        purchasing: false
    };

    addIngredient = type => {
        const newIngredients = { ...this.state.ingredients };
        newIngredients[type]++;

        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.setState({ purchasing: true, totalPrice: newPrice, ingredients: newIngredients });
    };

    removeIngredient = type => {
        if(this.state.ingredients[type] > 0) {
            const newIngredients = { ...this.state.ingredients };
            newIngredients[type]--;

            const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

            this.setState({ purchasing: newPrice > 1000, totalPrice: newPrice, ingredients: newIngredients });
        }
        
    };
    
    render () {
        const disabledIngredients = { ...this.state.ingredients };

        for(let key in disabledIngredients) {
            disabledIngredients[key] = disabledIngredients[key] <= 0;
        }

        return (
            <div>
                <Modal>
                    <h1>Та итгэлтэй байна уу?</h1>
                    <p>Захиалгын дэлгэрэнгүй</p>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    disabled={!this.state.purchasing}
                    price={this.state.totalPrice}
                    disabledIngredients={disabledIngredients} 
                    removeIngredient={this.removeIngredient} 
                    addIngredient={this.addIngredient} 
                />
            </div>
        );
    }
}

export default BurgerBuilder