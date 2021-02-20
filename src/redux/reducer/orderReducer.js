const initialState = {
    // Load order
    orders: [],
    loading: false,
    error: null,

    // Save order
    newOrder: {
        saving: false,
        finished: false,
        error: null
    }
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "CLEAR_ORDER" : return {
            ...state,
            newOrder: {
                saving: false,
                finished: false,
                error: null
            }
        };

        case "LOAD_ORDERS_START" : return {
            ...state,
            loading: true
        };

        case "LOAD_ORDERS_SUCCESS" : return {
            ...state,
            loading: false,
            orders: action.orders
        };

        case "LOAD_ORDERS_SUCCESS" : return {
            ...state,
            loading: false,
            orders: action.orders
        };

        case "SAVE_ORDERS_START" : return {
            ...state,
            newOrder: {
                ...state.newOrder,
                saving: true
            }
        };

        case "SAVE_ORDERS_SUCCESS" : return {
            ...state,
            newOrder: {
                ...state.newOrder,
                saving: false,
                finished: true,
                error: null
            }
        };

        case "SAVE_ORDERS_ERROR" : return {
            ...state,
            newOrder: {
                ...state.newOrder,
                saving: false,
                finished: true,
                error: action.error
            }
        };

        default: return state;
    };
};

export default reducer;