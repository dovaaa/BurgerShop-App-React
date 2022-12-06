import React from "react";
import burgerlogo from '../../assets/images/28.1 burger-logo.png.png'
import './Logo.css'
const logo = (props)=>(
    <div className="Logo" style={{height: props.height}}>
        <img src={burgerlogo} alt="burger"></img>
    </div>
);

export default logo;