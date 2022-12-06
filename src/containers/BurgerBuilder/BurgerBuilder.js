import Aux from "../../hoc/auxil";
import React from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};
class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
      totalPrice: 4,
      purchaseable: false,
      purchasing: false,
    };
  }
  purchaseHandler = () => {
    this.setState({
      purchasing: true,
    });
  };
  updatePurchaseState(updatedIngredients) {
    const ingredients = updatedIngredients;
    const sum = Object.keys(ingredients)
      .map((key) => {
        return ingredients[key];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({
      purchaseable: sum > 0,
    });
  }
  addIngredientHandler = (type) => {
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = this.state.ingredients[type] + 1;
    const price = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({
      totalPrice: price,
      ingredients: updatedIngredients,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] <= 0) {
      return;
    }
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = this.state.ingredients[type] - 1;
    const price = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({
      totalPrice: price,
      ingredients: updatedIngredients,
    });
    this.updatePurchaseState(updatedIngredients);
  };
  handleModalClosed = () => {
    this.setState({
      purchasing: false,
    });

  };
  purchaseContinueHandler = () => {
    alert("you continue");
    console.log("you continue ");
  };
  render() {
    const disabledLess = {
      ...this.state.ingredients,
    };
    for (let key in disabledLess) {
      disabledLess[key] = disabledLess[key] <= 0;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.handleModalClosed}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            purchasedCanceled={this.handleModalClosed}
            purchaseContinued={this.purchaseContinueHandler}
            price={this.state.totalPrice}
          ></OrderSummary>
        </Modal>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledLess}
          purchaseable={this.state.purchaseable}
          purchasing={this.purchaseHandler}
          price={this.state.totalPrice}
        ></BuildControls>
      </Aux>
    );
  }
}
export default BurgerBuilder;
