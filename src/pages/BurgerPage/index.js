import React, { useState } from "react";
import "./style.css";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";

//unenuud uurchlugduh shaardlaga app.d bhgui uchraas dotood state.d bish classiin gadna zarlay

const BurgerPage = (props) =>  {
    const [confirmOrder, setConfirmOrder] = useState(false);

    const showOrderConfirmModal = () => {
        setConfirmOrder(true);
    };

    const closeOrderConfirmModal = () => {
        setConfirmOrder(false);
    };

    const continueOrder = () => {
        props.history.push("/shipping");
    };

    return (
        <div>
            <Modal closeOrderConfirmModal={closeOrderConfirmModal} show={confirmOrder}>
            <OrderSummary 
                onCancel={closeOrderConfirmModal}
                onContinue={continueOrder}
            />
            </Modal>
            <Burger />
            <BuildControls showOrderConfirmModal={showOrderConfirmModal}/>
        </div>
    );
}

export default BurgerPage;