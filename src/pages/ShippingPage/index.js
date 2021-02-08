import React from "react";
import css from "./style.module.css";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import ContactData from "../../components/ContactData";
import { Route } from "react-router-dom";

export class ShippingPage extends React.Component {
    state = {
        ingredients: {},
        price: 0
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredient = {};
        let price = 0;

        for(let param of query.entries()) {
            //massiv garna ["salad", "1"], ["cheese", "2"], ["bacon", "2"], ["meat", "1"]
            //console.log(param);
            if(param[0] !== "price") ingredient[param[0]] = param[1];
            else price = param[1];
        }
        //console.log(ingredient);
        //{salad: "1", cheese: "2", bacon: "2", meat: "2"}
        this.setState({ ingredients: ingredient, price: price });
        //this.setState({ ingredients: ingredients }) => this.setState({ ingredients }) //ES6 deer ingej bichij boldog
    }

    cancelOrder = () => {
        //this.props.history.push("/");
        this.props.history.goBack();
    };

    showContactData = () => {
        //this.props.history.push("shipping/contact");
        this.props.history.replace("shipping/contact");
    }

    render() {
        return (
            <div className={css.ShippingPage}>
                <p style={{ fontSize: "24px" }}>
                    <strong>Дүн :  {this.state.price}₮</strong>
                </p>
                <Burger ingredients={this.state.ingredients} />
                <Button clicked={this.cancelOrder} btnType="Danger" text="ЗАХИАЛГЫГ ЦУЦЛАХ" />
                <Button clicked={this.showContactData} btnType="Success" text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ" />

                <Route path="/shipping/contact">
                    <ContactData ingredients={this.state.ingredients} price={this.state.price} />
                </Route>

                {/*<Route path="/shipping/contact" render={() => (
                    <ContactData ingredients={this.state.ingredients} price={this.state.price} />
                )} />*/}
            </div>
        );
    }
}