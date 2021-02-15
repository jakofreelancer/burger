export const addIngredient = ingredientName => {
    return {
        type: "ADD_INGREDIENT",
        ingredientName
    };
};

export const removeIngredient = ingredientName => {
    return {
        type: "REMOVE_INGREDIENT",
        ingredientName
    };
};