import React from "react";
import './Toolbar.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
const Toolbar = (props) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked}></DrawerToggle>
        <Logo height="80%"></Logo>
        <nav className="DesktopOnly">
            <NavigationItems></NavigationItems>
        </nav>
    </header>
);

export default Toolbar