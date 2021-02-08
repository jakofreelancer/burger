import React, { Component } from "react";
import "./style.css";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
//import axios from "../../axios-orders";
import Spinner from "../../components/General/Spinner";

//unenuud uurchlugduh shaardlaga app.d bhgui uchraas dotood state.d bish classiin gadna zarlay
const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };
const INGREDIENT_NAMES = {
    bacon: "Гахайн мах",
    cheese: "Бяслаг",
    meat: "Үхрийн мах",
    salad: "Салад"
};

class BurgerPage extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },

        totalPrice: 1000,
        purchasing: false,
        confirmOrder: false
    };

    componentDidMount = () => {
    };

    showOrderConfirmModal = () => {
        this.setState({ confirmOrder: true });
    };

    closeOrderConfirmModal = () => {
        this.setState({ confirmOrder: false });
    };

    continueOrder = () => {
        // const order = {
        //     ingredient: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     address: {
        //         name: "Javkhlan",
        //         city: "UB",
        //         street: "Olymp khotkhon 421-22"
        //     }
        // };

        // this.setState({loading: true});
        // axios
        //     .post("/orders.json", order)
        //     .then(response => {})
        //     .finally(() => {
        //         this.setState({loading: false});
        //     });
        const params = [];

        for(let ingredient in this.state.ingredients) {
            //console.log(ingredient + "=" + this.state.ingredients[ingredient]);
            params.push(ingredient + "=" + this.state.ingredients[ingredient]);
        }

        params.push("price=" + this.state.totalPrice);

        //this.props.history.push("/shipping");
        this.props.history.push({
            pathname: "/shipping",
            search: params.join("&")
        });

        this.closeOrderConfirmModal(); 
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
                <Modal closeOrderConfirmModal={this.closeOrderConfirmModal} show={this.state.confirmOrder}>
                    {this.state.loading ? (
                        <Spinner />
                    ) : (
                        <OrderSummary 
                            onCancel={this.closeOrderConfirmModal}
                            onContinue={this.continueOrder}
                            price={this.state.totalPrice}
                            ingredientNames={INGREDIENT_NAMES}
                            ingredients={this.state.ingredients} 
                        />
                    )}
                </Modal>
                <Burger chooseFavorite={this.props.chooseFavorite} ingredients={this.state.ingredients} />
                <BuildControls 
                    showOrderConfirmModal={this.showOrderConfirmModal}
                    ingredientNames={INGREDIENT_NAMES}
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

export default BurgerPage;