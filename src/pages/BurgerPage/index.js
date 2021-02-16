import React, { Component } from "react";
import "./style.css";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import Spinner from "../../components/General/Spinner";

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
        this.props.history.push("/shipping");
    };

    render () {
        return (
            <div>
                <Modal closeOrderConfirmModal={this.closeOrderConfirmModal} show={this.state.confirmOrder}>
                    {this.state.loading ? (
                        <Spinner />
                    ) : (
                        <OrderSummary 
                            onCancel={this.closeOrderConfirmModal}
                            onContinue={this.continueOrder}
                        />
                    )}
                </Modal>
                <Burger />
                <BuildControls 
                    showOrderConfirmModal={this.showOrderConfirmModal}
                    removeIngredient={this.props.removeSomeIngredient} 
                    addIngredient={this.props.addSomeIngredient} 
                />
            </div>
        );
    }
}

export default BurgerPage;