import React, { useState, useContext } from "react";
import css from "./style.module.css";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import ContactData from "../../components/ContactData";
import { Route } from "react-router-dom";
import BurgerContext from "../../context/BurgerContext";

const ShippingPage = (props) => {
    const ctx = useContext(BurgerContext);

    const cancelOrder = () => {
        //this.props.history.push("/");
        props.history.goBack();
    };

    const showContactData = () => {
        //this.props.history.push("shipping/contact");
        props.history.replace("shipping/contact");
    }

    return (
        <div className={css.ShippingPage}>
            <p style={{ fontSize: "24px" }}>
                <strong>Дүн :  {ctx.burger.totalPrice}₮</strong>
            </p>
            <Burger />
            <Button clicked={cancelOrder} btnType="Danger" text="ЗАХИАЛГЫГ ЦУЦЛАХ" />
            <Button clicked={showContactData} btnType="Success" text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ" />

            <Route path="/shipping/contact">
                <ContactData />
            </Route>

            {/*<Route path="/shipping/contact" render={() => (
                <ContactData ingredients={this.state.ingredients} price={this.state.price} />
            )} />*/}
        </div>
    );
}

export default ShippingPage;