import React, { useEffect, useContext } from "react";
import OrderContext from "../../context/OrdersContext";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";

const OrderPage = props => {
    useEffect(() => {
        orderContext.loadOrders("OrderContext.state.userId");
    }, []);

    const orderContext = useContext(OrderContext);

    //console.log("============", JSON.stringify(this.props.orders));
    return (
        <div>
            {orderContext.state.loading ? ( <Spinner /> ) : ( orderContext.state.orders.map(el => <Order key={el[0]} order={el[1]} />)) }
        </div>
    );
};

export default OrderPage;