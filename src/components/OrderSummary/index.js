import React, { useContext } from "react";

import BurgerContext from "../../context/BurgerContext";
import Button from "../General/Button";
//import Order from "../Order";

const OrderSummary = (props) => {
    const ctx = useContext(BurgerContext);

    return (
        <div>
            <h3>Таны захиалга</h3>
            <p>Таны сонгосон орцууд: </p>
            <ul>
                {Object.keys(ctx.burger.ingredients).map(el => (
                    <li key={el}>{ctx.burger.ingredientNames[el]}: {ctx.burger.ingredients[el]}</li>
                ))}
            </ul>
            <p><strong>Захиалгын дүн: {ctx.burger.totalPrice}₮</strong></p>
            <p>Цаашаа үргэлжлүүлэх үү?</p>
            <Button clicked={props.onContinue} btnType="Success" text="Үргэлжлүүлэх" />
            <Button clicked={props.onCancel} btnType="Danger" text="Татгалзах" />
        </div>
    );
};

export default OrderSummary;