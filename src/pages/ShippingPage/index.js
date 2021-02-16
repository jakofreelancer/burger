import React from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import ContactData from "../../components/ContactData";
import { Route } from "react-router-dom";

class ShippingPage extends React.Component {

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
                    <strong>Дүн :  {this.props.price}₮</strong>
                </p>
                <Burger />
                <Button clicked={this.cancelOrder} btnType="Danger" text="ЗАХИАЛГЫГ ЦУЦЛАХ" />
                <Button clicked={this.showContactData} btnType="Success" text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ" />

                <Route path="/shipping/contact">
                    <ContactData />
                </Route>

                {/*<Route path="/shipping/contact" render={() => (
                    <ContactData ingredients={this.state.ingredients} price={this.state.price} />
                )} />*/}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        price: state.totalPrice
    };
};

export default connect(mapStateToProps)(ShippingPage);