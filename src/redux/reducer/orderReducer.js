const initialState = {
    orders: [
        [
            "-M2s-uzoaANNf0MN-Wve",
            {
                address: {city: "Hove", name: "Ariunsanaa Batsaikhan", street: "3 Bodiham House Davigdor Road"},
                ingredient: {bacon: 1, cheese: 0, meat: 0, salad: 0},
                price: 1800
            }
        ]
    ],
    loading: false
};

const reducer = (state = initialState, action) => {
    if(action.type === "LOAD_ACTIONS") {
        return {
            ...state,
            loading: true
        };
    }
    return state;
};

export default reducer;