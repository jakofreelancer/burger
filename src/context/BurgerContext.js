import React, { useState } from "react";

const BurgerContext = React.createContext();

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

export const BurgerStore = props => {
    const [burger, setBurger] = useState(initialState);

    const addIngredient = (ingredient) => {
        setBurger({
            ...burger, 
            ingredients: {
                ...burger.ingredients, 
                [ingredient]: burger.ingredients[ingredient] + 1 
            },
            totalPrice: burger.totalPrice + INGREDIENT_PRICES[ingredient],
            purchasing: true
        });
    };

    const removeIngredient = (ingredient) => {
        const newPrice = burger.totalPrice - INGREDIENT_PRICES[ingredient];

        setBurger({
            ...burger, 
            ingredients: {
                ...burger.ingredients, 
                [ingredient]: burger.ingredients[ingredient] - 1 
            },
            totalPrice: burger.totalPrice - INGREDIENT_PRICES[ingredient],
            purchasing: newPrice > 1000
        });
    };

    return (
        <BurgerContext.Provider 
            value={{burger, addIngredient, removeIngredient}}
        >
            {props.children}
        </BurgerContext.Provider>
    );
};

export default BurgerContext;