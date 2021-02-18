import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/orderActions";

import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";

class OrderPage extends React.Component {
    componentDidMount(){
        this.props.loadOrders(this.props.userId);
    }

    render() {
        //console.log("============", JSON.stringify(this.props.orders));
        return (
            <div>
                {this.props.loading ? ( <Spinner /> ) : ( this.props.orders.map(el => <Order key={el[0]} order={el[1]} />)) }
            </div>
        );
    }
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