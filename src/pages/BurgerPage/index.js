import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import Spinner from "../../components/General/Spinner";
import * as actions from "../../redux/actions/burgerActions";

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
        //     ingredient: this.props.burgerIngredient,
        //     price: this.props.totalPrice,
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

        console.log("params first state: ");
        console.log(this.props);

        for(let ingredient in this.props.burgerIngredient) {
            //console.log(ingredient + "=" + this.props.burgerIngredient[ingredient]);
            params.push(ingredient + "=" + this.props.burgerIngredient[ingredient]);
        }

        params.push("price=" + this.props.totalPrice);

        //this.props.history.push("/shipping");
        this.props.history.push({
            pathname: "/shipping",
            search: params.join("&")
        });

        this.closeOrderConfirmModal(); 
    };

    addIngredient = type => {
        const newIngredients = { ...this.props.burgerIngredient };
        newIngredients[type]++;

        const newPrice = this.props.totalPrice + INGREDIENT_PRICES[type];

        this.setState({ purchasing: true, totalPrice: newPrice, ingredients: newIngredients });
    };

    removeIngredient = type => {
        if(this.props.burgerIngredient[type] > 0) {
            const newIngredients = { ...this.props.burgerIngredient };
            newIngredients[type]--;

            const newPrice = this.props.totalPrice - INGREDIENT_PRICES[type];

            this.setState({ purchasing: newPrice > 1000, totalPrice: newPrice, ingredients: newIngredients });
        }
        
    };

    render () {
        console.log("render deerh props ni: ");
        console.log(this.props);
        const disabledIngredients = { ...this.props.burgerIngredient };

        for(let key in disabledIngredients) {
            disabledIngredients[key] = disabledIngredients[key] <= 0;
        }

        console.log("heyyyyy", this.props);

        return (
            <div>
                <Modal closeOrderConfirmModal={this.closeOrderConfirmModal} show={this.state.confirmOrder}>
                    {this.state.loading ? (
                        <Spinner />
                    ) : (
                        <OrderSummary 
                            onCancel={this.closeOrderConfirmModal}
                            onContinue={this.continueOrder}
                            price={this.props.totalPrice}
                            ingredientNames={INGREDIENT_NAMES}
                            ingredients={this.props.burgerIngredient} 
                        />
                    )}
                </Modal>
                <Burger ingredients={this.props.burgerIngredient} />
                <BuildControls 
                    showOrderConfirmModal={this.showOrderConfirmModal}
                    ingredientNames={INGREDIENT_NAMES}
                    disabled={!this.state.purchasing}
                    price={this.props.totalPrice}
                    disabledIngredients={disabledIngredients} 
                    removeIngredient={this.props.removeSomeIngredient} 
                    addIngredient={this.props.addSomeIngredient} 
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        burgerIngredient: state.ingredients,
        totalPrice: state.totalPrice
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addSomeIngredient: ingredientName => dispatch(actions.addIngredient(ingredientName)),
        removeSomeIngredient: ingredientName => dispatch(actions.removeIngredient(ingredientName))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerPage);
//export default BurgerPage;