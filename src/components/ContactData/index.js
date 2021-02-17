import React from "react";
import { connect } from "react-redux";

import Button from "../General/Button";
import css from "./style.module.css";
import axios from "../../axios-orders";
import Spinner from "../../components/General/Spinner";
import { withRouter } from "react-router-dom";
import * as actions from "../../redux/actions/orderActions";

class ContactData extends React.Component {
    state = {
        name: null,
        city: null,
        street: null
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

    componentDidUpdate() {
        if(this.props.newOrderStatus.finished && !this.props.newOrderStatus.error) {
            this.props.history.replace("/orders");
        }
    }

    saveOrder = () => {
        const newOrder = {
            ingredient: this.props.ingredients,
            price: this.props.price,
            address: {
                name: this.state.name,
                city: this.state.city,
                street: this.state.street
            }
        };

        this.props.saveOrderAction(newOrder);

        // this.setState({ loading: true });
    };

    render() {
        return(
            <div className={css.ContactData}>
                Үнэ: {this.props.price}

                <div>
                    {this.props.newOrderStatus.error && `Захиалгыг хадгалах явцад алдаа гарлаа : ${this.props.newOrderStatus.error}`}
                </div>
                {this.props.newOrderStatus.saving ? <Spinner /> : (
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
        price: state.burgerReducer.totalPrice,
        ingredients: state.burgerReducer.ingredients,
        newOrderStatus: state.orderReducer.newOrder
    };
};

const mapDispatchToProps = dispatch => {
    return {
        saveOrderAction: (newOrder) => dispatch(actions.saveOrder(newOrder))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactData));