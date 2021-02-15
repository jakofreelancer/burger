const initialState = {
    ingredients: {
        salad: 0,
        cheese: 0,
        bacon: 0,
        meat: 0
    },
    totalPrice: 1000
};

const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };

const reducer = (state = initialState, action) => {
    console.log("reducerees duudav: ", action);
    if(action.type === "ADD_INGREDIENT") {
        console.log(action.ingredientToAdd);
        return {
            ingredients: {
                ...state.ingredients,
                //bacon: state.ingredients.bacon + 1
                [action.ingredientName]: state.ingredients[action.ingredientName] + 1
            },
            totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
        };
    } else if(action.type === "REMOVE_INGREDIENT") {
        return {
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] - 1
            },
            totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
        };
    }
    
    return state;
}

export default reducer;