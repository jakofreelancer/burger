import React from "react";
import css from "./style.module.css";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";

export class ShippingPage extends React.Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        }
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredient = {};

        for(let param of query.entries()) {
            //massiv garna ["salad", "1"], ["cheese", "2"], ["bacon", "2"], ["meat", "1"]
            //console.log(param);
            ingredient[param[0]] = param[1];
        }
        //console.log(ingredient);
        //{salad: "1", cheese: "2", bacon: "2", meat: "2"}
        this.setState({ ingredients: ingredient });
        //this.setState({ ingredients: ingredients }) => this.setState({ ingredients }) //ES6 deer ingej bichij boldog
    }

    goBack = () => {
        this.props.history.goBack();
    };

    render() {
        return (
            <div>
                <Burger ingredients={this.state.ingredients} />
                <Button clicked={this.goBack} btnType="Danger" text="Захиалгыг цуцлах" />
            </div>
        );
    }
}