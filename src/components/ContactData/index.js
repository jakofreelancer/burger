import React, { useState, useEffect, useRef, useContext } from "react";

import Button from "../General/Button";
import css from "./style.module.css";
import Spinner from "../../components/General/Spinner";
import { useHistory } from "react-router-dom";
import BurgerContext from "../../context/BurgerContext";
import UserContext from "../../context/UserContext";

const ContactData = (props) => {
    const history = useHistory();
    const ctx = useContext(BurgerContext);
    const userCtx = useContext(UserContext);
    const [name, setName] = useState();
    const [city, setCity] = useState();
    const [street, setStreet] = useState();
    const amountRef = useRef();

    useEffect(() => {
        if(ctx.burger.finished && !ctx.burger.error) {
            history.replace("/orders");
        }

        return () => {
            // Clean-up function -> Захиалгыг буцаагаад хоосолж (initialState) дараагийн захиалгад бэлдэнэ
            ctx.clearBurger();
        };
    }, [ctx.burger.finished]);

    const changeName = (el) => {
        //console.log(amountRef.current);
        //amountRef.current.style.color = "red" ? ("green") : (amountRef.current.style.color); 
        if(amountRef.current.style.color === "red") 
            amountRef.current.style.color = "green";
        else amountRef.current.style.color = "red";
        setName(el.target.value);
    }

    const changeStreet = (el) => {
        setStreet(el.target.value);
    }

    const changeCity = (el) => {
        setCity(el.target.value);
    }

    const saveOrder = () => {
        const newOrder = {
            userId: userCtx.state.userId,
            ingredient: ctx.burger.ingredients,
            price: ctx.burger.totalPrice,
            address: {
                name,
                city,
                street
            }
        };

        ctx.saveBurger(newOrder, userCtx.state.token);

        // this.setState({ loading: true });
    };

    return(
        <div className={css.ContactData}>
            <div ref={amountRef}><strong style={{fontSize: "16px"}}>Үнэ: {ctx.burger.totalPrice}</strong></div>

            <div>
                {ctx.burger.error && `Захиалгыг хадгалах явцад алдаа гарлаа : ${ctx.burger.error}`}
            </div>
            {ctx.burger.saving ? <Spinner /> : (
                <div>
                    <input onChange={changeName} type="text" name="name" placeholder="Таны нэр" />
                    <input onChange={changeStreet} type="text" name="street" placeholder="Таны гэрийн хаяг" />
                    <input onChange={changeCity} type="text" name="city" placeholder="Таны хот, аймаг" />
                    <Button text="ИЛГЭЭХ" btnType="Success" clicked={saveOrder} />
                </div>
            )}
        </div>
    );
}

export default ContactData;