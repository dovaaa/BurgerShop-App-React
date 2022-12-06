import React from "react";
import Aux from "../../../hoc/auxil";
import Button from "../../UI/Button/Button";
class OrderSummary extends React.Component{ 

  componentDidUpdate(){
    console.log('here')
  }
  render(){
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map((key) => {
      return (
        <li key={key}>
          <span style={{ textTransform: "capitalize" }}>
            {key} : {this.props.ingredients[key]}
          </span>
        </li>
      );
    });
    return(

        <Aux>
          <h3>Your Order</h3>
          <p>a delicious burger with following ingredients:</p>
          <ul>{ingredientSummary}</ul>
          <p> Total Price: {this.props.price.toFixed(2)}$</p>
          <p>Continue to checkout?</p>
          <Button btnType="Danger" clicked={this.props.purchasedCanceled}>Cancel</Button>
          <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
        </Aux>
    )
  }
}
  
export default OrderSummary;
