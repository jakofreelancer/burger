import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/orderActions";

import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";

const OrderPage = props => {
    useEffect(() => {
        props.loadOrders(props.userId);
    }, []);

    //console.log("============", JSON.stringify(this.props.orders));
    return (
        <div>
            {props.loading ? ( <Spinner /> ) : ( props.orders.map(el => <Order key={el[0]} order={el[1]} />)) }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        orders: state.orderReducer.orders,
        loading: state.orderReducer.loading,
        userId: state.signupLoginReducer.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadOrders: (userId) => dispatch(actions.loadOrders(userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);