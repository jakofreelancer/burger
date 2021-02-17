import axios from "../../axios-orders";

export const loadOrders = () => {
    return function(dispatch) {
        //Захиалгыг татаж эхэллээ гэдгийг мэдэгдэнэ.
        //Энийг хүлээж аваад Spinner ажиллаж эхлэнэ.
        dispatch(loadOrdersStart());

        axios
            .get("/orders.json")
            .then(response => {
                const loadedOrders = Object.entries(response.data).reverse();
                dispatch(loadOrdersSuccess(loadedOrders));
        }).catch(err => dispatch(loadOrdersErrors(err)));
    };
};

export const loadOrdersStart = () => {
    return {
        type: "LOAD_ORDERS_START"
    };
};

export const loadOrdersSuccess = (loadedOrders) => {
    return {
        type: "LOAD_ORDERS_SUCCESS",
        orders: loadedOrders
    };
};

export const loadOrdersErrors = (error) => {
    return {
        type: "LOAD_ORDERS_ERROR",
        error
    };
};