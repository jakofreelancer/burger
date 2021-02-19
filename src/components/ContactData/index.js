import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Button from "../General/Button";
import css from "./style.module.css";
import Spinner from "../../components/General/Spinner";
import { withRouter } from "react-router-dom";
import * as actions from "../../redux/actions/orderActions";

const ContactData = (props) => {
    const [name, setName] = useState();
    const [city, setCity] = useState();
    const [street, setStreet] = useState();

    useEffect(() => {
        if(props.newOrderStatus.finished && !props.newOrderStatus.error) {
            props.history.replace("/orders");
        }
    });

    const changeName = (el) => {
        setName(el.target.value);
    }

    const changeStreet = (el) => {
        setStreet(el.target.value);
    }

    const changeCity = (el) => {
        setCity(el.target.value);
    }

    const saveOrder = () => {
        const newOrder = {
            userId: props.userId,
            ingredient: props.ingredients,
            price: props.price,
            address: {
                name,
                city,
                street
            }
        };

        props.saveOrderAction(newOrder);

        // this.setState({ loading: true });
    };

    return(
        <div className={css.ContactData}>
            Үнэ: {props.price}

            <div>
                {props.newOrderStatus.error && `Захиалгыг хадгалах явцад алдаа гарлаа : ${props.newOrderStatus.error}`}
            </div>
            {props.newOrderStatus.saving ? <Spinner /> : (
                <div>
                    <input onChange={changeName} type="text" name="name" placeholder="Таны нэр" />
                    <input onChange={changeStreet} type="text" name="street" placeholder="Таны гэрийн хаяг" />
                    <input onChange={changeCity} type="text" name="city" placeholder="Таны хот, аймаг" />
                    <Button text="ИЛГЭЭХ" btnType="Success" clicked={saveOrder} />
                </div>
            )}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        price: state.burgerReducer.totalPrice,
        ingredients: state.burgerReducer.ingredients,
        newOrderStatus: state.orderReducer.newOrder,
        userId: state.signupLoginReducer.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        saveOrderAction: (newOrder) => dispatch(actions.saveOrder(newOrder))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactData));