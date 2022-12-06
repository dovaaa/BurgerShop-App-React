import React from "react"
import './Burger.css'
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";
const burger = (props)=>{
     let transformedIngredients= Object.keys(props.ingredients).map((args)=> {
        return [...Array(props.ingredients[args])].map((_,i)=>{
            return <BurgerIngredient key={args+i} type={args}></BurgerIngredient>
        })
     }).reduce((arr, el)=> {
        return arr.concat(el)
     },[]);

     if(transformedIngredients.length===0){
        transformedIngredients=<p>add some ingredients please</p>
     }
    return(
        <div className="Burger">
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    );
};

export default burger;