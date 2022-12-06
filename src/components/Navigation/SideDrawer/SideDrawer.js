import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import './SideDrawer.css'
import Aux from "../../../hoc/auxil";
const sideDrawer = (props) => {
    // ...
    let attachedClasses = ["SideDrawer", "Close"]
    if(props.open){
        attachedClasses=["SideDrawer", "Open"]
    }
    return(
        <Aux>
        <Backdrop show={props.open} clicked={props.closed}></Backdrop>
        <div className={attachedClasses.join(' ')}>
            <Logo height="11%"></Logo>
            <nav>
                <NavigationItems></NavigationItems>
            </nav>
        </div>
        </Aux>
    );
}

export default sideDrawer