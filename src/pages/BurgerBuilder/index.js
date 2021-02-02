import React, { Component } from "react";
import "./style.css";
import Burger from "../../components/Burger";

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            cheese: 2,
            bacon: 2,
            meat: 1
        }
    }

    render () {
        return (
            <div>
                <Burger ingredients={this.state.ingredients} />
                <div>Орцны удирдлага</div>
            </div>
        );
    }
}

export default BurgerBuilder