import React from "react";
import { connect } from "react-redux";

import Button from "../General/Button";
import css from "./style.module.css";
import axios from "../../axios-orders";
import Spinner from "../../components/General/Spinner";
import { withRouter } from "react-router-dom";

class ContactData extends React.Component {
    state = {
        name: null,
        city: null,
        street: null,
        loading: false
    };

    changeName = (el) => {
        this.setState({ name: el.target.value });
    }

    changeStreet = (el) => {
        this.setState({ street: el.target.value });
    }

    changeCity = (el) => {
        this.setState({ city: el.target.value });
    }

    saveOrder = () => {
        const order = {
            ingredient: this.props.ingredients,
            price: this.props.price,
            address: {
                name: this.state.name,
                city: this.state.city,
                street: this.state.street
            }
        };

        this.setState({ loading: true });
        axios
            .post("/orders.json", order)
            .then(response => {
                console.log("Order's successful!!!");
            })
            .catch(error => {
                console.log("Order's amjiltgui!!!" + error);
            })
            .finally(() => {
                this.setState({ loading: false });
                this.props.history.replace("/orders");
                //console.log('props ni ene bn: ');
                //console.log({this.props});
            });
    };

    render() {
        return(
            <div className={css.ContactData}>
                Үнэ: {this.props.price}
                {this.state.loading ? <Spinner /> : (
                    <div>
                        <input onChange={this.changeName} type="text" name="name" placeholder="Таны нэр" />
                        <input onChange={this.changeStreet} type="text" name="street" placeholder="Таны гэрийн хаяг" />
                        <input onChange={this.changeCity} type="text" name="city" placeholder="Таны хот, аймаг" />
                        <Button text="ИЛГЭЭХ" btnType="Success" clicked={this.saveOrder} />
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        price: state.totalPrice,
        ingredients: state.ingredients
    };
};

export default connect(mapStateToProps)(withRouter(ContactData));