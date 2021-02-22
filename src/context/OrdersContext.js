import React, { useState } from "react";
import axios from "../axios-orders";

const OrderContext = React.createContext();

const initialState = {
    orders: [],
    loading: false,
    error: null
};

export const OrderStore = props => {
    const [state, setState] = useState(initialState);

    const loadOrders = (userId, token) => {
        // Захиалгыг татаж эхэллээ гэдгийг мэдэгдэнэ
        // Энийг хүлээж аваад Spinner ажиллаж эхэлнэ
        setState({ ...state, loading: true });

        axios
            .get(`orders.json?&auth=${token}&orderBy="userId"&equalTo="${userId}"`)
            .then((response) => {
                const loadedOrders = Object.entries(response.data).reverse();
                setState({...state, orders: loadedOrders});
            })
            .catch((err) => setState({ ...state, error: err }));
    };

    return (
        <OrderContext.Provider value={{ state, loadOrders }}>
            {props.children}
        </OrderContext.Provider>
    );
};

export default OrderContext;