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

class BurgerPage extends Component {
    state = {
        confirmOrder: false
    };

    showOrderConfirmModal = () => {
        this.setState({ confirmOrder: true });
    };

    closeOrderConfirmModal = () => {
        this.setState({ confirmOrder: false });
    };

    continueOrder = () => {
        const params = [];

        for(let ingredient in this.props.burgerIngredient) {
            params.push(ingredient + "=" + this.props.burgerIngredient[ingredient]);
        }

        params.push("price=" + this.props.totalPrice);

        this.props.history.push({
            pathname: "/shipping",
            search: params.join("&")
        });

        this.closeOrderConfirmModal(); 
    };

    render () {
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
                            ingredientNames={this.props.ingredientNames}
                            ingredients={this.props.burgerIngredient} 
                        />
                    )}
                </Modal>
                <Burger ingredients={this.props.burgerIngredient} />
                <BuildControls 
                    showOrderConfirmModal={this.showOrderConfirmModal}
                    ingredientNames={this.props.ingredientNames}
                    disabled={!this.props.purchasing}
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
        totalPrice: state.totalPrice,
        purchasing: state.purchasing,
        ingredientNames: state.ingredientNames
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