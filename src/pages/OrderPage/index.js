import React, { useEffect, useContext } from "react";
import OrderContext from "../../context/OrdersContext";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";
import UserContext from "../../context/UserContext";

const OrderPage = props => {
    useEffect(() => {
        orderContext.loadOrders(userContext.state.userId, userContext.state.token);
    }, []);

    const orderContext = useContext(OrderContext);
    const userContext = useContext(UserContext);

    //console.log("============", JSON.stringify(this.props.orders));
    return (
        <div>
            {orderContext.state.loading ? ( <Spinner /> ) : ( orderContext.state.orders.map(el => <Order key={el[0]} order={el[1]} />)) }
        </div>
    );
};

export default OrderPage;