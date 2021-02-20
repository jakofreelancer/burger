const initialState = {
    ingredients: {
        salad: 0,
        cheese: 0,
        bacon: 0,
        meat: 0
    },
    totalPrice: 1000,
    purchasing: false,
    ingredientNames: {
        bacon: "Гахайн мах",
        cheese: "Бяслаг",
        meat: "Үхрийн мах",
        salad: "Салад"
    }
};

const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };

const reducer = (state = initialState, action) => {
    if(action.type === "ADD_INGREDIENT") {
        return {
            ...state,
            ingredients: {
                ...state.ingredients,
                //bacon: state.ingredients.bacon + 1
                [action.ingredientName]: state.ingredients[action.ingredientName] + 1
            },
            totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
            purchasing: true
        };
    } else if (action.type === "REMOVE_INGREDIENT") {
        const newPrice = state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
        return {
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] - 1
            },
            totalPrice: newPrice,
            purchasing: newPrice > 1000
        };
    } else if (action.type === "CLEAR_ORDER") {
        return initialState;
    };

    return state;
}

export default reducer;