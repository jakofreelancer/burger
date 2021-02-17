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

//Захиалгыг хадгалах
export const saveOrder = (newOrder) => {
    return function(dispatch) {
        //Spinner эргэлдэнэ
        dispatch(saveOrderStart());

        //Firebase рүү хадгална
        axios
            .post("/orders.json", newOrder)
            .then(response => {
                dispatch(saveOrderSuccess())
            })
            .catch(error => {
                dispatch(saveOrderError(error));
            });
            // .finally(() => {
            //     this.setState({ loading: false });
            //     this.props.history.replace("/orders");
            // });
    };
};

export const saveOrderStart = () => {
    return {
        type: "SAVE_ORDER_START"
    };
};

export const saveOrderSuccess = () => {
    return {
        type: "SAVE_ORDER_SUCCESS"
    };
};

export const saveOrderError = () => {
    return {
        type: "SAVE_ORDER_ERROR"
    };
};